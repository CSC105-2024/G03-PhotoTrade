import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FolderPlus } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createCollection } from '@/reducer/collection';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AddCollection = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.collection)

  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    const payload = {
      userId : parseInt(id),
      name: data.name
    }
    dispatch(createCollection(payload))
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Card className="w-[300px] h-[465px] flex justify-center items-center bg-accent text-accent-foreground border shadow-xs dark:bg-input/50 dark:border-input">
          <FolderPlus size={48} />
        </Card>
      </DialogTrigger>

      <DialogContent className="rounded-xl p-8 flex flex-col justify-center items-center text-center">
        <div className="w-full max-w-sm">
          <DialogTitle>Create Collection</DialogTitle>
          <DialogDescription>Fixed the warning</DialogDescription>

          <form onSubmit={handleSubmit(submitForm)}>
            <label className="block text-sm mb-1 text-left">Name</label>
            <Input 
              id ="name"
              type="text"  
              placeholder="Enter image name" 
              className="w-full mb-4"
              {...register('name')}
              />
            <Button 
              className="w-full"
            >
              Create
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCollection;
