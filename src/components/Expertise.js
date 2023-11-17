import expertise1 from '/public/images/expertise1.svg';
import expertise2 from '/public/images/expertise2.svg';
import expertise3 from '/public/images/expertise3.svg';
import expertise4 from '/public/images/expertise4.svg';
import expertise5 from '/public/images/expertise5.svg';
import expertise6 from '/public/images/expertise6.svg';
import expertise7 from '/public/images/expertise7.svg';
import expertise8 from '/public/images/expertise8.svg';
import expertise9 from '/public/images/expertise9.svg';
import expertise10 from '/public/images/expertise10.svg';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const Expertise = () => {
  const { arabicLanguage } = useAppContext();
  const expertise = [
    {
      name: 'Healthcare and data science',
      arabicName: 'الرعاية الصحية وعلوم البيانات',
      img: expertise1
    },
    {
      name: 'Finance And Accounting',
      arabicName: 'المالية والمحاسبة',
      img: expertise2
    },
    {
      name: 'Education and learning',
      arabicName: 'التعليم والتعلم',
      img: expertise3
    },
    {
      name: 'Manufacturing and Energy',
      arabicName: 'التصنيع والطاقة',
      img: expertise4
    },
    {
      name: 'Retail and Logistics',
      arabicName: 'البيع بالتجزئة والخدمات اللوجستية',
      img: expertise5
    },
    {
      name: 'Lifestyle, travel and Hospitality',
      arabicName: 'نمط الحياة والسفر والضيافة',
      img: expertise6
    },
    {
      name: 'Nonprofit',
      arabicName: 'غير ربحية',
      img: expertise7
    },
    {
      name: 'Public Sector',
      arabicName: 'القطاع العام',
      img: expertise8
    },
    {
      name: 'Communication & Media      ',
      arabicName: 'الاتصال والإعلام',
      img: expertise9
    },
    {
      name: 'High Tech',
      arabicName: 'التكنولوجيا العالية',
      img: expertise10
    }
  ];
  return (
    <section className="text-center container xl:max-w-[1291px] px-4 mx-auto">
      <h2 data-aos="fade-up" className="font-black font-GilroyBlack capitalize text-xl lg:text-5xl lg:leading-[56px] text-white mb-[60px]">
        {arabicLanguage ? 'مجالات ' : 'Our Areas'} <span className="text-yellow">{arabicLanguage ? 'خبرتنا' : 'Of Expertise'}</span>
      </h2>
      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-y-5">
        {expertise.map((list, i) => {
          return (
            <div key={i} data-aos="fade-up" className="px-7 py-5 flex gap-2.5 flex-col">
              <Image className="mx-auto" src={list.img} alt={list.name} />
              <p className="font-black font-GilroyBlack text-white w-[241px] mx-auto text-2xl">{arabicLanguage ? list.arabicName : list.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
