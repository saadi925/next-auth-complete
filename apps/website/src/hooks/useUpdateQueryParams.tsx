'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import  { useCallback, useEffect } from "react"

export default function useUpdateQueryParams(key: string, value: string) {
 
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
      if (value === "" || !value) {
        return
      }
      router.push(pathname + '?' + createQueryString(key, value))
    }, [key, value, pathname, router, createQueryString])
}
