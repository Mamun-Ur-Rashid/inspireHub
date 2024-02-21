
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '@/asserts/ihh.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <Box className='bg-black text-white'
            component="footer"
        >
            <Box className='mx-10 grid sm:grid-cols-1 md:grid-cols-3 p-10 gap-10 '>
                <Box className='space-y-2'>
                    <Typography>
                        <Image className="" src={logo} width={25} height={25} alt="logo" />
                    </Typography>
                    <Box className='text-2xl'>
                        InspireHub
                        <Typography className='my-2 text-gray-300 text-sm'>
                            Motivational & Lerning Website
                        </Typography>
                        <Typography className=' text-gray-300 text-sm'>
                            Since : 2023
                        </Typography>
                        <Typography className=' text-gray-300 text-sm'>
                            Contact : +88014082435..
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography className='my-2 text-gray-300 text-xl'>
                        Services
                    </Typography>
                    <Typography className='my-2 text-gray-300 text-sm'>
                        <Link href='/contact'>Contact</Link>
                    </Typography>
                    <Typography className='my-2 text-gray-300 text-sm'>
                        <Link href='/about'>About Us</Link>
                    </Typography>
                    <Typography className='my-2 text-gray-300 text-sm'>
                        <Link href='/blog'>Blog</Link>
                    </Typography>
                    <Typography className='my-2 text-gray-300 text-sm'>
                        <Link href='/policy'>Refund policy</Link>
                    </Typography>
                    <Typography className='my-2 text-gray-300 text-sm'>
                        <Link href=''>Terms and Conditions</Link>
                    </Typography>

                </Box>
                <Box>
                    <Typography className='my-2 text-gray-300 text-2xl font-bold mb-4'>
                        Follow Us
                    </Typography>
                    <Box className='grid md:grid-cols-3 gap-2'>
                        <Box>
                            <Link href='/facebook'> FaceBook</Link>
                        </Box>
                        <Box>
                            <Link href='/facebook'> FaceBook</Link>
                        </Box>
                        <Box>
                            <Link href='/facebook'> FaceBook</Link>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>

            <Typography variant="body2" className='text-gray-300 text-center pb-5'>
                Copy Write Privecy InspireHub &copy; {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;
