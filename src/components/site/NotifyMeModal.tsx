import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

export function NotifyMeModal({
  trigger,
  title = "Sé el primero en enterarte",
  description = "Te avisamos cuando el podcast salga al aire. Sin spam, lo prometemos.",
}: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => {
        setDone(false);
        setEmail("");
      }, 300);
    }, 1800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-surface border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl tracking-wide text-foreground">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">{description}</DialogDescription>
        </DialogHeader>
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-lg bg-accent/10 p-6 text-center ring-1 ring-accent/30"
            >
              <p className="text-lg font-bold text-accent-light">
                ¡Listo! Te avisamos cuando llegue el momento 🐾
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <Input
                type="email"
                required
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border text-foreground"
              />
              <Button type="submit" className="w-full bg-gradient-accent text-background font-bold hover:opacity-90">
                Avísame 🐾
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
