import {
  ArrowLeft,
  ArrowRight,
  Download,
  Search,
  Settings,
  User2,
} from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button>
          <ArrowLeft width={20} className="text-white" />
        </button>
        <button>
          <ArrowRight width={20} className="text-white" />
        </button>

        <div className="relative">
          <Search
            width={20}
            className="absolute left-2 top-1/2 -translate-y-[50%] text-white"
          />
          <input
            placeholder="Tìm kiếm bài hát"
            className="pl-8 rounded-3xl py-2 w-96 bg-[#7a6a923a] text-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-[#9359eb] font-bold text-white py-2 px-4 flex justify-center items-center">
          Nâng cấp tài khoản
        </button>
        <button className="rounded-full bg-[#2c2b2e] font-bold text-[#b68ef1] py-2 px-4 flex justify-center gap-2 items-center">
          <Download width={20} />
          Tải bản Windows
        </button>
        <button className="rounded-full bg-[#58565a] font-bold w-10 h-10  flex justify-center items-center">
          <Settings width={20} className="text-white" />
        </button>
        <button className="rounded-full bg-[#413d47] font-bold w-10 h-10  flex justify-center items-center">
          <User2 width={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
