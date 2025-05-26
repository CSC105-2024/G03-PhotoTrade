import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImagePlus, ImageUp, Loader } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPhoto } from '@/reducer/photo';
import { DialogClose } from '@radix-ui/react-dialog';
import { Dropdowncategoryprofile } from '@/components/dropdown/selectcategory';

const AddPicture = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([1]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'addpic');

      const res = await fetch('https://api.cloudinary.com/v1_1/dc7tbudqa/image/upload', {
        method: 'POST',
        body: data,
      });

      const fileUrl = await res.json();
      console.log(fileUrl.url);
      setValue(fileUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      thumbnail_url: '',
      price: '',
      categoryIds: [1],
    },
  });

  const handleCategoriesChange = (categoryIds) => {
    setSelectedCategories(categoryIds);
  };

  const submitForm = (data) => {
    const payload = {
      title: data.name,
      description: data.description,
      thumbnail_url: value.secure_url,
      price: parseInt(data.price),
      categoryIds: selectedCategories, 
    };
    dispatch(createPhoto(payload));
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Card className="w-[250px] h-[400px] flex justify-center items-center bg-accent text-accent-foreground border shadow-xs dark:bg-input/50 dark:border-input">
          <ImagePlus size={48} />
        </Card>
      </DialogTrigger>
      <DialogContent className="rounded-xl md:max-w-3xl w-[95vw] p-5">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col md:flex-row md:gap-6 gap-4">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/pdf"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            <div className="mx-auto md:mx-0">
              <Card
                className="flex justify-center items-center w-[300px] h-[400px] cursor-pointer border-solid border-2 border-white dark:border-gray-600"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                type="button"
              >
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center">
                    <Loader size={40} className="animate-spin text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Loading...</p>
                  </div>
                ) : value && value.secure_url ? (
                  <img src={value.secure_url} alt="Uploaded image" className="w-full h-full object-cover" />
                ) : (
                  <ImageUp size={80} strokeWidth={1.75} color="#787878" />
                )}
              </Card>

              <p className="mt-2 text-sm text-center overflow-hidden text-ellipsis">{value.original_filename || ''}</p>
            </div>

            <div className="md:flex-1 w-full">
              <DialogTitle className="text-xl font-bold mb-3">Upload Image</DialogTitle>
              <label className="block text-sm mb-1">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Enter image name"
                className="w-full mb-3"
                {...register('name')}
              />

              <label className="block text-sm mb-1">Description</label>
              <Input
                id="description"
                type="text"
                placeholder="Enter description"
                className="w-full mb-3 h-[60px]"
                {...register('description')}
              />

              <label className="block text-sm mb-1">Price</label>
              <div className="flex items-center gap-2 mb-3">
                <Input id="price" type="text" placeholder="Enter price" className="w-full" {...register('price')} />
              </div>

              <label className="block text-sm mb-1">Categories</label>
              <div className="mb-4">
                <Controller
                  name="categoryIds"
                  control={control}
                  render={({ field }) => (
                    <Dropdowncategoryprofile 
                      value={selectedCategories}
                      onChange={(value) => {
                        handleCategoriesChange(value);
                        field.onChange(value);
                      }}
                    />
                  )}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Upload'}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPicture;