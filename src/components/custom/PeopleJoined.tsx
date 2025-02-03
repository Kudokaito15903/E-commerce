"use client";

import React from "react";
import {People} from "../../../types/index"
import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function PeopleJoined({ data }: { data: People[] }) {
  return (
    <div className="flex flex-row justify-center">
      <AnimatedTooltip items={data} />
    </div>
  );
}