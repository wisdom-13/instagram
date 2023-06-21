'use client'
import { ClientSafeProvider, signIn } from "next-auth/react";
// import { GoogleIcon } from './ui/icons/GoogleIcon'


type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {/* {flex bg-white justify-center items-center} */}
      <div className='w-[470px] h-5/6 m-auto border rounded-md p-8'>
        <h1 className='w-full text-2xl'>Sign In</h1>
        <div className='mt-8'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl })}
                className='w-full rounded-md border py-4'>
                {/* <GoogleIcon /> */}
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

