import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dropdowncategoryprofile } from '@/components/dropdown/selectcategory';
import { Dropdownfilter } from '@/components/dropdown/selectfilter';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

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
import { useState, useRef, useEffect } from 'react';
import { set } from 'react-hook-form';

const Header = () => {
  const [showCommand, setShowCommand] = useState(false);
  const commandRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (commandRef.current && !commandRef.current.contains(event.target)) {
        setShowCommand(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [commandRef]);

  return (
    <section className="md:pt-20">
      <div>
        <h1 className="text-4xl font-bold">Browse Marketplace</h1>
        <p className="mt-2 text-neutral-500">Browse through more than 50k Photo on the Photo Marketplace.</p>
      </div>

      <div className="relative ml-auto flex-1 md:grow-0 my-6">
        <div className="flex space-x-3">
          <Command className="rounded-lg border shadow-md md:min-w-[450px]" ref={commandRef}>
            <CommandInput
              placeholder="Type a command or search..."
              onClick={() => {
                setShowCommand(true);
              }}
            />
            {showCommand && (
              <div>
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem disabled>
                      <Calculator />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </div>
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
