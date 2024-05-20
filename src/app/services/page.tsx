import Image from 'next/image';
import geohub from '../../../public/assets/icons/geohub.jpg';
import Link from 'next/link';
import { Metadata } from 'next';
import { DoubleArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import data from '@/data/data.json';
import Product from '@/components/cards/product';
import ServiceList from './service-list';

export const metadata: Metadata = {
  title: 'Services',
};
const Services: React.FC = () => {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-10 min-h-[85vh] grid place-items-center'>
        <div className='flex flex-col gap-6 lg:gap-10 justify-center items-center'>
          <h1 className='text-4xl lg:text-8xl text-center font-bold'>
            Tailor-made solutions for your geoscience needs
          </h1>
          <p className='text-center mt-4 text-xl lg:text-2xl max-w-[900px]'>
            From enterprises to academia – we help the community solve geo
            problems.
          </p>
          <Link
            href='#services'
            className='w-[60px] h-[60px] lg:h-[100px] lg:w-[100px]  grid place-items-center border-accent border-dashed border rounded-full'
          >
            <DoubleArrowDownIcon className='down-arrow' />
          </Link>
        </div>
      </section>
      
      <ServiceList />

      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-16'>Products</h2>
        <ul className='grid gap-8 lg:gap-10 mt-5 grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]'>
          {data.products.slice(0, 3).map((product) => (
            <Product
              key={product.name}
              name={product.name}
              cover={product.cover}
              description={product.description}
              availability={product.availability}
            />
          ))}
        </ul>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div>
          <h3 className='text-2xl lg:text-4xl font-bold mb-10'>Powered by</h3>
          <div className='grid grid-cols-2 gap-20'>
            <div>
              <Image src={geohub} alt='partners log' className='w-[150px]' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
