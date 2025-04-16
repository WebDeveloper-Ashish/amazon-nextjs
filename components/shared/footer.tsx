"use client"
import { ChevronUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
export default function Footer() {
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full  rounded-none "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/careers">Careers</Link>
              </li>
              <li>
                <Link href="/page/blog">Blog</Link>
              </li>
              <li>
                <Link href="/page/about-us">About name {APP_NAME}</Link>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center  gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © {APP_NAME}</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          Address
        </div>
      </div>
    </footer>
  )
}
