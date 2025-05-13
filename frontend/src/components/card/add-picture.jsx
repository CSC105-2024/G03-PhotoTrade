import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImagePlus, ImageUp } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPhoto } from '@/reducer/photo';
import { DialogClose } from '@radix-ui/react-dialog';

const AddPicture = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'photo_trade');

    const res = await fetch('https://api.cloudinary.com/v1_1/dcpgrfpaf/image/upload', {
      method: 'POST',
      body: data,
    });

    const fileUrl = await res.json();
    console.log(fileUrl.url);
    setValue(fileUrl);
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      thumbnail_url: '',
      price: '',
      categoryIds: [1],
    },
  });

  const submitForm = (data) => {
    const payload = {
      title: data.name,
      description: data.description,
      thumbnail_url: value.secure_url,
      price: parseInt(data.price),
      categoryIds: [1],
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
      <DialogContent className="rounded-xl p-8">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="lg:flex lg:gap-8">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/pdf"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
 
            <div>
              <Card
                className="flex justify-center items-center w-[250px] cursor-pointer border-solid border-2 border-white dark:border-gray-600"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                type="button"
              >
                {value && value.secure_url ? (
                  <img src={value.secure_url} alt="Sun" className="w-full h-full object-cover" />
                ) : (
                  <ImageUp size={100} strokeWidth={1.75} color="#787878" />
                )}
              </Card>

              <p>{value.original_filename}</p>
            </div>

            <div className="lg:w-[60%] w-full">
              <DialogTitle className="text-2xl font-bold mb-6">Upload Image</DialogTitle>
              <DialogDescription>Fixed the warning</DialogDescription>
              <label className="block text-sm mb-1">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Enter image name"
                className="w-full mb-4"
                {...register('name')}
              />

              <label className="block text-sm mb-1">Description</label>
              <Input
                id="description"
                type="text"
                placeholder="Enter description"
                className="w-full mb-4 h-[80px]"
                {...register('description')}
              />

              <label className="block text-sm mb-1">Price</label>
              <div className="flex items-center gap-2 mb-3">
                <Input id="price" type="text" placeholder="Enter price" className="w-full" {...register('price')} />
              </div>

              <Button className="w-full">
                Upload
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPicture;
