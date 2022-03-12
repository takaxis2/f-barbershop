import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>  
      </Link>
      <Link href="/signIn">
        <a>Sign In</a>  
      </Link>
      <Link href="/signUp">
        <a>Sign Up</a>  
      </Link>
      
    </div>
  )
}
