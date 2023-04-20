import React from 'react'
import TitleSection from './TitleSection'

export default function FooterTop() {
  return (
    <div className='border-t-2 '>
        <div className='p-10 flex justify-around '>
            <TitleSection subtitle="AstroWind" description="Terms Privacy Policy"/>
            <div>
                <ul>
                    <li className='font-bold my-2'>Product</li>
                    <li className='my-2'>Features</li>
                    <li className='my-2'>Security</li>
                    <li className='my-2'>Team</li>
                    <li className='my-2'>Enterprise</li>
                    <li className='my-2'>Custom stories</li>
                    <li className='my-2'>Princing</li>
                    <li className='my-2'>Resources</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold my-2'>Platform</li>
                    <li className='my-2'>Developer API</li>
                    <li className='my-2'>Parteners</li>
                    <li className='my-2'>Atom</li>
                    <li className='my-2'>Electron</li>
                    <li className='my-2'>AstroWind Destop</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold my-2'>Support</li>
                    <li className='my-2'>Docs</li>
                    <li className='my-2'>Community Forum</li>
                    <li className='my-2'>Professional Services</li>
                    <li className='my-2'>Skills</li>
                    <li className='my-2'>Status</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold my-2'>Company</li>
                    <li className='my-2'>About</li>
                    <li className='my-2'>Blog</li>
                    <li className='my-2'>Careers</li>
                    <li className='my-2'>Press</li>
                    <li className='my-2'>Inclusion</li>
                    <li className='my-2'>Social Impact</li>
                    <li className='my-2'>Shop</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
