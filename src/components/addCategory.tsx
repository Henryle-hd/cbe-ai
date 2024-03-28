import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface addCategoryProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddCategory({ open, setOpen }: addCategoryProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🗒️ add Category</DialogTitle>
        </DialogHeader>

        <Input placeholder="add topic... " />
        <DialogFooter>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
