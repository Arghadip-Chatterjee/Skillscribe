"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("16c5cb50-a6b1-4ad1-ab78-17b349daff29");
  }, []);

  return null;
};
