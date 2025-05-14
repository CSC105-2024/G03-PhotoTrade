import React, { useState, useEffect, useRef } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dropdowncategoryprofile } from '@/components/dropdown/selectcategory';
import { Dropdownfilter } from '@/components/dropdown/selectfilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPhoto, getPhotoByCategory, getPhotosByPriceLowToHigh, getPhotosByPriceHighToLow } from '@/reducer/photo';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {
  const [showCommand, setShowCommand] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const commandRef = useRef(null);
  const dispatch = useDispatch();
  const { photoList, loading } = useSelector((state) => state.photo);
  
  // รับค่า query parameters ปัจจุบัน
  const currentPage = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('pageSize') || '5');
  const sort = searchParams.get('sort') || '';
  const categoryParam = searchParams.get('category') || '';
  const categoryIds = categoryParam ? categoryParam.split(',').map(id => parseInt(id)) : [];

  // ตัวแปรสำหรับป้องกันการเรียก API ซ้ำๆ
  const apiCallRef = useRef(false);

  const tempPhoto = search
    ? photoList.filter((photo) =>
        photo.title?.toLowerCase().includes(search.toLowerCase())
      )
    : photoList;

  useEffect(() => {
    // เพิ่มการป้องกันการเรียก API ซ้ำ
    if (apiCallRef.current) return;
    apiCallRef.current = true;

    // ดึงข้อมูลตาม filter
    const fetchData = async () => {
      try {
        if (categoryIds.length > 0) {
          await dispatch(getPhotoByCategory(categoryIds));
        } else if (sort === 'price_low_to_high') {
          await dispatch(getPhotosByPriceLowToHigh());
        } else if (sort === 'price_high_to_low') {
          await dispatch(getPhotosByPriceHighToLow());
        } else {
          await dispatch(getAllPhoto({ page: currentPage, perPage }));
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        apiCallRef.current = false;
      }
    };

    fetchData();

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
      apiCallRef.current = false;
    };
  }, [dispatch, currentPage, perPage]);

  // แยกการจัดการกับการเปลี่ยนแปลง filters ออกมาต่างหาก
  useEffect(() => {
    if (apiCallRef.current) return;
    
    const fetchFilteredData = async () => {
      apiCallRef.current = true;
      try {
        if (categoryIds.length > 0) {
          await dispatch(getPhotoByCategory(categoryIds));
        } else if (sort === 'price_low_to_high') {
          await dispatch(getPhotosByPriceLowToHigh());
        } else if (sort === 'price_high_to_low') {
          await dispatch(getPhotosByPriceHighToLow());
        }
      } catch (error) {
        console.error("Error fetching filtered photos:", error);
      } finally {
        apiCallRef.current = false;
      }
    };

    if (categoryIds.length > 0 || sort) {
      fetchFilteredData();
    }
  }, [dispatch, sort, categoryIds]);

  // จัดการการเปลี่ยนแปลงตัวกรอง
  const handleSortChange = (sortType) => {
    // อัปเดต query parameters
    const newParams = new URLSearchParams(searchParams);
    
    if (sortType) {
      newParams.set('sort', sortType);
    } else {
      newParams.delete('sort');
    }
    
    newParams.set('page', '1'); // รีเซ็ตหน้าเป็นหน้าแรกเมื่อมีการกรอง
    setSearchParams(newParams);
  };

  // จัดการการเปลี่ยนแปลงหมวดหมู่
  const handleCategoryChange = (selectedCategories) => {
    // อัปเดต query parameters
    const newParams = new URLSearchParams(searchParams);
    
    if (selectedCategories.length > 0) {
      newParams.set('category', selectedCategories.join(','));
    } else {
      newParams.delete('category');
    }
    
    newParams.set('page', '1'); // รีเซ็ตหน้าเป็นหน้าแรกเมื่อมีการกรอง
    setSearchParams(newParams);
  };

  return (
    <section className="md:pt-20">
      <div>
        <h1 className="text-4xl font-bold">Browse Marketplace</h1>
        <p className="mt-2 text-neutral-500">
          Browse through more than 50k Photo on the Photo Marketplace.
        </p>
      </div>

      <div className="relative ml-auto flex-1 md:grow-0 my-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
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
                        <Avatar className="mr-2 h-6 w-6">
                          <AvatarImage src={photo.thumbnail_url} />
                          <AvatarFallback>PH</AvatarFallback>
                        </Avatar>
                        <p>{photo.title}</p>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            )}
          </Command>
          
          <div className="flex gap-3 mt-3 md:mt-0">
            <Dropdownfilter onFilterChange={handleSortChange} />
            <Dropdowncategoryprofile 
              onChange={handleCategoryChange} 
              value={categoryIds}
            />
          </div>
        </div>
      </div>
      
      {/* แสดงสถานะการกรอง */}
      {(sort || categoryIds.length > 0) && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Filters applied:</span>
          {sort && (
            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
              {sort.replace(/_/g, ' ')}
            </div>
          )}
          {categoryIds.length > 0 && (
            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
              {categoryIds.length} {categoryIds.length === 1 ? 'category' : 'categories'}
            </div>
          )}
          <button 
            className="text-xs text-red-500 hover:underline"
            onClick={() => {
              const newParams = new URLSearchParams();
              newParams.set('page', '1');
              newParams.set('pageSize', perPage.toString());
              setSearchParams(newParams);
            }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
};

export default Header;