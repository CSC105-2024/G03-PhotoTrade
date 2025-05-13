import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Smile,
  Calculator,
  CreditCard,
  Settings,
  User,
} from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dropdowncategoryprofile } from '@/components/dropdown/selectcategory';
import { Dropdownfilter } from '@/components/dropdown/selectfilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPhoto } from '@/reducer/photo';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showCommand, setShowCommand] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate()
  const commandRef = useRef(null);
  const dispatch = useDispatch();
  const { photoList } = useSelector((state) => state.photo);

  const tempPhoto = search
    ? photoList.filter((photo) =>
        photo.title.toLowerCase().includes(search.toLowerCase())
      )
    : photoList;

  useEffect(() => {
    dispatch(getAllPhoto());

    const handleClickOutside = (event) => {
      if (
        commandRef.current &&
        !commandRef.current.contains(event.target)
      ) {
        setShowCommand(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <section className="md:pt-20">
      <div>
        <h1 className="text-4xl font-bold">Browse Marketplace</h1>
        <p className="mt-2 text-neutral-500">
          Browse through more than 50k Photo on the Photo Marketplace.
        </p>
      </div>

      <div className="relative ml-auto flex-1 md:grow-0 my-6">
        <div className="md:flex space-x-3">
          <Command
            className="rounded-lg border shadow-md md:min-w-[450px]"
            ref={commandRef}
          >
            <CommandInput
              placeholder="Type a command or search..."
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setShowCommand(true)}
            />

            {showCommand && (
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {tempPhoto.length > 0 && (
                  <CommandGroup heading="Photos">
                    {tempPhoto.map((photo) => (
                      <CommandItem
                        key={photo.id}
                        value={photo.title}
                        onSelect={() => {
                          setShowCommand(false);
                          navigate(`/market/${photo.id}`)
                        }}
                      >
                        <Avatar>
                          <AvatarImage src={photo.thumbnail_url} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>{photo.title}</p>
                        </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            )}
          </Command>
          <Dropdownfilter />
          <Dropdowncategoryprofile />
        </div>
      </div>
    </section>
  );
};

export default Header;
