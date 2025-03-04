import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { Hero } from '@/app/components/hero';

export default function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
