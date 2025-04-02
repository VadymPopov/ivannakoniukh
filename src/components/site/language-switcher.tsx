"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState("en");

  const handleLanguageChange = (newLocale: string) => {
    console.log(newLocale);
    setLocale(newLocale);
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className='uppercase text-[#cba590] border border-[#cba590] hover:text-black hover:bg-white'>
        <span>{locale === "en" ? "en" : "ua"}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='en'>English</SelectItem>
        <SelectItem value='ua'>Ukrainian</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
