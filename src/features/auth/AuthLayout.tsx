import Image from 'next/image'
import Link from 'next/link'


export const AuthLayout = ({children}:{children: React.ReactNode})  => {
  return (
    <div>
       <div className='bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10'>
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link className='flex items-center gap-2 self-center font-medium' href='/'>
            <Image
            src='/nbs.svg'
            alt='Nodebase'
            width={30}
            height={30}
            />
            Nodebase
          </Link>
          {children}
  </div>
  </div>
    </div>
  )
}
