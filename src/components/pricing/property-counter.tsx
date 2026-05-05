"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type Props = {
  value: number;
  setValue: (v: number) => void;
  min?: number;
};

const PropertyCounter = ({ value, setValue, min = 5 }: Props) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-2 mt-4">
      <span className="text-sm text-muted-foreground">
        Properties: <strong>{value}</strong>
      </span>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setValue(Math.max(min, value - 1))}
        >
          <Minus className="w-4 h-4" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setValue(value + 1)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PropertyCounter;
