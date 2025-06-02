'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { Calculator, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import concat from '../lib/concat';

export const fadeIn = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    },
  },
};

function Header() {
  const [offsetY, setOffsetY] = useState(0);
  const [open, setOpen] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset < 600) {
      setOffsetY(window.pageYOffset);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const router = useRouter();

  const tools = [
    {
      name: 'Protein Calculator',
      href: '/tools/protein-calculator',
      icon: Calculator,
      description: 'Calculate daily protein needs',
    },
    // {
    //   name: 'BMI Calculator',
    //   href: '/tools/bmi-calculator',
    //   icon: Scale,
    //   description: 'Body mass index calculator',
    // },
    // {
    //   name: 'Calorie Calculator',
    //   href: '/tools/calorie-calculator',
    //   icon: Target,
    //   description: 'Daily calorie requirements',
    // },
    // {
    //   name: 'Macro Calculator',
    //   href: '/tools/macro-calculator',
    //   icon: Utensils,
    //   description: 'Macronutrient breakdown',
    // },
    // {
    //   name: 'TDEE Calculator',
    //   href: '/tools/tdee-calculator',
    //   icon: Activity,
    //   description: 'Total daily energy expenditure',
    // },
  ];

  return (
    <header
      className={concat(
        offsetY > 80 ? 'border-types-150' : 'border-transparent',
        'flex items-center border-b bg-types-50 justify-center sticky transition-all ease-out duration-200 top-0 z-50 px-6',
      )}
    >
      <div className="justify-between sm:justify-start h-[71px] md:h-[80px] w-full max-w-6xl mx-auto flex items-center gap-10 relative">
        <div className="flex items-center sm:gap-6">
          <Link href={'/'} className="flex items-center">
            <button className="flex shrink-0 items-center">
              <img src="/logo-text-white.svg" className="w-24 mr-2" />
            </button>
          </Link>

          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="flex items-center gap-2 text-white hover:text-green-400 transition-colors duration-200 text-sm font-medium">
              Tools
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-types-150 border-types-175 min-w-[280px] p-2"
              align="start"
            >
              {tools.map((tool) => (
                <Link href={tool.href} key={tool.href}>
                  <DropdownMenuItem asChild onClick={() => setOpen(false)}>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-types-200 transition-colors duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-400/20 rounded-lg">
                        <tool.icon className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium text-sm">
                          {tool.name}
                        </span>
                        <span className="text-on-100 text-xs">
                          {tool.description}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {router.pathname !== '/shared/meal/[id]' ? (
          <div className="justify-end w-full flex space-x-2 items-center">
            <div className="mt-1 sm:mt-0 sm:pl-4">
              <div className="mt-1 sm:mt-0 sm:pl-4">
                <a href="https://discord.gg/Q3dQj2Kqzm">
                  <button
                    className={
                      'bg-[#5865F2] px-5 text-white group py-1.5 w-full text-left sm:text-center gap-2 rounded-full flex items-center transition-all ease-out duration-200'
                    }
                  >
                    <i className="fa-brands fa-discord group-hover:scale-110 transition-all ease-out duration-200" />
                    <span className="text-white/80 font-semibold">
                      Join Discord
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
