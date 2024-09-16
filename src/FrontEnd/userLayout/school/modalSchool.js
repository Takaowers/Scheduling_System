import React from "react";
import "./modal.css";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {X} from "lucide-react";

import {cn} from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


// const Dialog = DialogPrimitive.Root
// const DialogTrigger= DialogPrimitive.Trigger
// const DialogPortal = DialogPrimitive.Portal
// const DialogClose = DialogPrimitive.Close

function ModalSchool() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ModalSchool;
