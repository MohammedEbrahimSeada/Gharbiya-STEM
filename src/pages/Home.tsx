import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, Building, Globe, ArrowRight, BookOpen, Beaker, Calculator, Atom, LogIn, UserPlus } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';
import SubscribeNewsletter from '../components/SubscribeNewsletter';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Sample data - in a real application, this would come from an API or CMS
  const news = [
    {
      id: '1',
      title: language === 'en' ? 'STEM Gharbiya Students Win National Science Competition' : 'طلاب STEM الغربية يفوزون بمسابقة العلوم الوطنية',
      excerpt: language === 'en' ? 'Our students showcased exceptional talent and innovation at the National Science Competition...' : 'أظهر طلابنا موهبة وابتكارًا استثنائيين في مسابقة العلوم الوطنية...',
      date: '2025-03-15',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Achievements' : 'إنجازات'
    },
    {
      id: '2',
      title: language === 'en' ? 'STEM Gharbiya Inaugurates New Robotics Lab' : 'افتتاح مختبر الروبوتات الجديد في STEM الغربية',
      excerpt: language === 'en' ? 'We are excited to announce the opening of our state-of-the-art robotics laboratory...' : 'يسعدنا أن نعلن عن افتتاح مختبر الروبوتات المتطور لدينا...',
      date: '2025-03-10',
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Facilities' : 'مرافق'
    },
    {
      id: '3',
      title: language === 'en' ? 'STEM Gharbiya Partners with MIT for Exchange Program' : 'STEM الغربية تتشارك مع MIT لبرنامج التبادل',
      excerpt: language === 'en' ? 'We are proud to announce our new partnership with Massachusetts Institute of Technology...' : 'نحن فخورون بالإعلان عن شراكتنا الجديدة مع معهد ماساتشوستس للتكنولوجيا...',
      date: '2025-03-05',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Partnerships' : 'شراكات'
    }
  ];

  const events = [
    {
      title: language === 'en' ? 'Annual Science Fair' : 'معرض العلوم السنوي',
      date: language === 'en' ? 'April 15, 2025' : '15 أبريل 2025',
      time: language === 'en' ? '10:00 AM - 4:00 PM' : '10:00 صباحًا - 4:00 مساءً',
      location: language === 'en' ? 'STEM Gharbiya Main Hall' : 'القاعة الرئيسية STEM الغربية',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: language === 'en' ? 'Robotics Workshop' : 'ورشة عمل الروبوتات',
      date: language === 'en' ? 'April 20, 2025' : '20 أبريل 2025',
      time: language === 'en' ? '2:00 PM - 5:00 PM' : '2:00 مساءً - 5:00 مساءً',
      location: language === 'en' ? 'Robotics Lab' : 'مختبر الروبوتات',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  const testimonials = [
    {
      quote: language === 'en' 
        ? 'The education I received at STEM Gharbiya equipped me with the knowledge and skills that led to my acceptance into a top-tier engineering program.' 
        : 'لقد زودني التعليم الذي تلقيته في STEM Gharbiya بالمعرفة والمهارات التي أدت إلى قبولي في برنامج هندسي متميز.',
      name: language === 'en' ? 'Ahmed Hassan' : 'أحمد حسن',
      role: language === 'en' ? 'Class of 2024, Now at Cairo University' : 'دفعة 2024، الآن في جامعة القاهرة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
    },
    {
      quote: language === 'en'
        ? 'The project-based learning approach at STEM Gharbiya taught me to think critically and solve real-world problems effectively.'
        : 'نهج التعلم القائم على المشاريع في STEM الغربية علمني كيفية التفكير النقدي وحل المشكلات الواقعية.',
      name: language === 'en' ? 'Nour El-Sayed' : 'نور السيد',
      role: language === 'en' ? 'Class of 2023, Now at Ain Shams University' : 'دفعة 2023، الآن في جامعة عين شمس',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
    },
    {
      quote: language === 'en'
        ? 'The exceptional teachers at STEM Gharbiya inspired me to pursue a career in scientific research.'
        : 'لقد ألهمني المعلمون المتميزون في STEM Gharbiya لمواصلة مسيرتي المهنية في مجال البحث العلمي.',
      name: language === 'en' ? 'Mohamed Ibrahim' : 'محمد إبراهيم',
      role: language === 'en' ? 'Class of 2022, Now at Alexandria University' : 'دفعة 2022، الآن في جامعة الإسكندرية',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
    }
  ];

  const programs = [
    {
      icon: Beaker,
      title: language === 'en' ? 'Science Program' : 'برنامج العلوم',
      description: language === 'en' 
        ? 'Advanced courses in biology, chemistry, and physics with hands-on laboratory experiments.'
        : 'دورات متقدمة في علم الأحياء والكيمياء والفيزياء مع تجارب معملية عملية.'
    },
    {
      icon: Calculator,
      title: language === 'en' ? 'Mathematics Program' : 'برنامج الرياضيات',
      description: language === 'en'
        ? 'Comprehensive mathematics curriculum covering algebra, calculus, statistics, and mathematical modeling.'
        : 'منهج رياضيات شامل يغطي الجبر والتفاضل والتكامل والإحصاء والنمذجة الرياضية.'
    },
    {
      icon: Atom,
      title: language === 'en' ? 'Engineering Program' : 'برنامج الهندسة',
      description: language === 'en'
        ? 'Project-based engineering courses focusing on design, robotics, and sustainable solutions.'
        : 'دورات هندسية قائمة على المشاريع تركز على التصميم والروبوتات والحلول المستدامة.'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Technology Program' : 'برنامج التكنولوجيا',
      description: language === 'en'
        ? 'Cutting-edge technology courses in programming, artificial intelligence, and digital systems.'
        : 'دورات تكنولوجية متطورة في البرمجة والذكاء الاصطناعي والأنظمة الرقمية.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Student Portal CTA Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'Access Your Student Portal' : 'ادخل إلى بوابة الطلاب'}
            </h2>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Current students can access grades, projects, resources, and more through our student portal.'
                : 'يمكن للطلاب الحاليين الوصول إلى الدرجات والمشاريع والموارد والمزيد من خلال بوابة الطلاب.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                <LogIn className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Student Login' : 'دخول الطلاب'}
              </Link>
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 border border-blue-900"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Create Account' : 'إنشاء حساب'}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why STEM Gharbiya Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.whyStem} 
            subtitle={language === 'en' 
              ? 'Discover what makes our educational approach unique and effective'
              : 'اكتشف ما يجعل نهجنا التعليمي فريدًا وفعالًا'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard 
              icon={Lightbulb} 
              title={t.innovativeCurriculum} 
              description={t.innovativeCurriculumDesc} 
            />
            <FeatureCard 
              icon={Users} 
              title={t.qualifiedFaculty} 
              description={t.qualifiedFacultyDesc} 
            />
            <FeatureCard 
              icon={Building} 
              title={t.modernFacilities} 
              description={t.modernFacilitiesDesc} 
            />
            <FeatureCard 
              icon={Globe} 
              title={t.internationalOpportunities} 
              description={t.internationalOpportunitiesDesc} 
            />
          </div>
        </div>
      </section>
      
      {/* Academic Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={language === 'en' ? 'Academic Programs' : 'البرامج الأكاديمية'} 
            subtitle={language === 'en' 
              ? 'Explore our comprehensive STEM curriculum for future innovators'
              : 'استكشف منهجنا الشامل في مجالات العلوم والتكنولوجيا والهندسة والرياضيات (STEM) للمبتكرين المستقبليين'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {programs.map((program, index) => (
              <FeatureCard 
                key={index}
                icon={program.icon} 
                title={program.title} 
                description={program.description} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300">
              {language === 'en' ? 'Learn more about our programs' : 'تعرف على المزيد حول برامجنا'} 
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.latestNews} centered={false} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {news.map((item, index) => (
              <NewsCard 
                key={index}
                id={item.id}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                image={item.image}
                category={item.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300">
              {t.viewAllNews} <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.upcomingEvents} centered={false} />
          
          <div className="space-y-6 mt-8">
            {events.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                image={event.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300">
              {t.viewAllEvents} <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Student Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.testimonials} 
            subtitle={language === 'en' 
              ? 'Hear from STEM Gharbiya alumni about their experiences'
              : 'اسمع من خريجينا عن تجاربهم في STEM الغربية'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-lg overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {language === 'en' ? 'Take a Virtual Tour' : 'قم بجولة افتراضية'}
                </h2>
                <p className="text-blue-200 mb-6">
                  {language === 'en' 
                    ? 'Curious what it’s like inside STEM Gharbiya? Explore our labs, classrooms, and facilities, all without stepping outside !'
                    : 'استكشف مرافقنا المتطورة والمختبرات ومساحات التعلم من راحة منزلك.'
                  }
                </p>
                <Link to="/gallery" className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-300 self-start">
                  {language === 'en' ? 'Start Tour' : 'ابدأ الجولة'}
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80" 
                  alt="STEM Gharbiya Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admissions CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Ready to Join STEM Gharbiya?' : 'هل أنت مستعد للانضمام إلى STEM الغربية؟'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Applications for the 2025-2026 academic year are now open. Start your journey towards excellence in STEM education today.'
                : 'طلبات الالتحاق للعام الدراسي 2025-2026 مفتوحة الآن. ابدأ رحلتك نحو التميز في تعليم العلوم والتكنولوجيا والهندسة والرياضيات اليوم.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                {t.applyNow}
              </Link>
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-green-700 transition duration-300"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Create Student Account' : 'إنشاء حساب طالب'}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
};

export default Home;