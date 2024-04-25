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
interface addCategoryProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddCategory({ open, setOpen }: addCategoryProps) {
  const router = useRouter();
  const form = useForm<AddInfoInput>({
    resolver: zodResolver(addInfoSchema),
    defaultValues: {
      title: "",
      main_body: "",
    }
    


  })
  async function onSubmit(input: AddInfoInput) {
        
    try {
      const response = await fetch("/api/cbeinfo", 
        {
          method: "POST",
          body: JSON.stringify(input),
    
        })
      
      if(!response.ok) throw Error ("Status code: " + response.status)
      form.reset();
      router.refresh();
      setOpen(false);
      
    } catch (error) {
      console.error(error)
    }
   }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="h-screen sm:h-auto"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>🗒️ Add Info</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Title.. " />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="main_body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main body</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter information in detail"
                      className="min-h-[50vh]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <LoadingBtn type="submit" loading={form.formState.isSubmitting} >
                Submit
              </LoadingBtn>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
