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

interface addCategoryProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddCategory({ open, setOpen }: addCategoryProps) {
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

        <DialogDescription>Title</DialogDescription>
        <Input placeholder="Title.. " />

        <DialogDescription>Main body</DialogDescription>

        <Textarea placeholder="Enter information in detail" className="min-h-[50vh]" />
        <DialogFooter>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
