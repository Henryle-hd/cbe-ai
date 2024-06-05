import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { AddInfoInput, addInfoSchema } from "@/lib/validation/cbeinfo";
import {useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import LoadingBtn from "./ui/loading-btn";
import { useRouter } from "next/navigation";
import { Info } from "@prisma/client";
import { useState } from "react";
interface addEditCategoryProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  infoToEdit?:Info;
}


export default function AddCategory({
  open,
  setOpen,
  infoToEdit,
}: addEditCategoryProps) {
const [deleteInProgress, setDeleteInProgress] = useState(false);

  const router = useRouter();
  const form = useForm<AddInfoInput>({
    resolver: zodResolver(addInfoSchema),
    defaultValues: {
      title: infoToEdit?.title ||"",
      main_body: infoToEdit?.main_body || "",
    }
  })
  async function onSubmit(input: AddInfoInput) {
  
    try {

      if (infoToEdit) {
           const response = await fetch("/api/cbeinfo", {
             method: "PUT",
             body: JSON.stringify({ id: infoToEdit.id, ...input }),
           });
            if (!response.ok) throw Error("Status code: " + response.status);
      } else {
        const response = await fetch("/api/cbeinfo", {
          method: "POST",
          body: JSON.stringify(input),
        });
        if (!response.ok) throw Error("Status code: " + response.status);
        form.reset();
        }
      
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error)
      alert("Something went wrong, please try again later.");
    }
   }
  async function onDelete() {
    if (!infoToEdit) return;
    setDeleteInProgress(true);
    try {
      const response = await fetch("/api/cbeinfo", {
        method: "DELETE",
        body: JSON.stringify({ id: infoToEdit.id }),
      });

      if (!response.ok) throw Error("Status code: " + response.status);
      router.refresh();
      setOpen(false);
    }catch(error){
      console.error(error)
      alert("Something went wrong, please try again later.");
    } finally {
      setDeleteInProgress(false);
    }
}
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-screen h-screen sm:h-[95vh] sm:max-w-[60%] "
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center">
            {infoToEdit ? "Edit info 📚" : "Add info 📚"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center gap-2">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Title.. "
                      className="min-w-[300px] max-w-[300px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="main_body"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center gap-2">
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter information in detail"
                      className="max-h-[60vh] min-h-[60vh]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="gap-1 sm:gap-0">
              {infoToEdit && (
                <LoadingBtn
                  loading={deleteInProgress}
                  onClick={onDelete}
                  disabled={form.formState.isSubmitting}
                  variant={"destructive"}
                  type="button"
                >
                  Delete
                </LoadingBtn>
              )}
              <LoadingBtn
                type="submit"
                loading={form.formState.isSubmitting}
                disabled={deleteInProgress}
              >
                Submit
              </LoadingBtn>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
