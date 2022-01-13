import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="">
            <div className="">
                <div className="">
                    <Link href="/">
                        <a>
                        <h1 className="font-semibold text-xl dark:text-gray-100">
                            Deepak Singh
                        </h1> 
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}