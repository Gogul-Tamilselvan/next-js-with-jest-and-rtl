"use client"
import { useRouter } from 'next/router'

export default function routerTest(){
    const router = useRouter()
    return<>

    <div>Hello</div>
    <button onClick={()=>{router.push('/')}}>Home</button>
    </>
}