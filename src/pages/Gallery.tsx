import React, { useState, useContext } from 'react';
import { Play, Download, Calendar, Users, Award, Beaker } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SubscribeNewsletter from '../components/SubscribeNewsletter';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Gallery: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'projects'>('photos');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample gallery data
  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Science Laboratory' : 'مختبر العلوم',
      category: 'facilities',
      date: '2024-03-15'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Robotics Workshop' : 'ورشة الروبوتات',
      category: 'events',
      date: '2024-03-10'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Students in Action' : 'الطلاب في العمل',
      category: 'students',
      date: '2024-03-08'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Science Competition' : 'مسابقة العلوم',
      category: 'competitions',
      date: '2024-03-05'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
      title: language === 'en' ? 'Campus Overview' : 'نظرة عامة على الحرم الجامعي',
      category: 'facilities',
      date: '2024-03-01'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Graduation Ceremony' : 'حفل التخرج',
      category: 'events',
      date: '2024-02-28'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Technology Lab' : 'مختبر التكنولوجيا',
      category: 'facilities',
      date: '2024-02-25'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Group Study Session' : 'جلسة دراسة جماعية',
      category: 'students',
      date: '2024-02-20'
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'STEM Gharbiya Virtual Tour' : 'جولة افتراضية في STEM الغربية',
      duration: '5:30',
      category: 'tour'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Student Robotics Project' : 'مشروع الروبوتات الطلابي',
      duration: '3:45',
      category: 'projects'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Science Fair Highlights' : 'أبرز معرض العلوم',
      duration: '7:20',
      category: 'events'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Student Testimonials' : 'شهادات الطلاب',
      duration: '4:15',
      category: 'testimonials'
    }
  ];

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Solar-Powered Water Purification System' : 'نظام تنقية المياه بالطاقة الشمسية',
      students: language === 'en' ? 'Ahmed Hassan, Nour El-Sayed' : 'أحمد حسن، نور السيد',
      category: 'engineering',
      award: language === 'en' ? 'First Place - National Science Fair' : 'المركز الأول - معرض العلوم الوطني'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'AI-Powered Plant Disease Detection' : 'كشف أمراض النباتات بالذكاء الاصطناعي',
      students: language === 'en' ? 'Mohamed Ibrahim, Laila Kamal' : 'محمد إبراهيم، ليلى كمال',
      category: 'technology',
      award: language === 'en' ? 'Innovation Award - Regional Competition' : 'جائزة الابتكار - المسابقة الإقليمية'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Mathematical Model for Traffic Optimization' : 'نموذج رياضي لتحسين حركة المرور',
      students: language === 'en' ? 'Fatima Ali, Omar Hassan' : 'فاطمة علي، عمر حسن',
      category: 'mathematics',
      award: language === 'en' ? 'Best Research Project - Mathematics Olympiad' : 'أفضل مشروع بحثي - أولمبياد الرياضيات'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: language === 'en' ? 'Biodegradable Plastic Alternative' : 'بديل البلاستيك القابل للتحلل',
      students: language === 'en' ? 'Sara Ahmed, Youssef Mohamed' : 'سارة أحمد، يوسف محمد',
      category: 'science',
      award: language === 'en' ? 'Environmental Impact Award' : 'جائزة التأثير البيئي'
    }
  ];

  const categories = [
    { id: 'all',         label: t.all },
    { id: 'facilities',  label: t.facilities },
    { id: 'events',      label: t.events },
    { id: 'students',    label: t.students },
    { id: 'competitions',label: t.competitions },
  ];
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80" 
            alt="STEM Gharbiya Gallery" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="…">{t.galleryTitle}</h1>
          <p className="…">
            {t.galleryDesc}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                activeTab === 'photos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.photos}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.videos}
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.studentProjects}
            </button>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      {activeTab === 'photos' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                      <Download className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{photo.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos Section */}
      {activeTab === 'videos' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition duration-300">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition duration-300">
                        <Play className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {video.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Student Projects Section */}
      {activeTab === 'projects' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <Award className="h-5 w-5 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{project.students}</span>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-sm text-yellow-800 font-medium">{project.award}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {language === 'en' ? 'Experience STEM Gharbiya Virtually' : 'اختبر STEM الغربية افتراضيًا'}
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Take an immersive 360° virtual tour of our campus and see our facilities, laboratories, and learning spaces up close.'
                  : 'قم بجولة افتراضية غامرة بزاوية 360 درجة في حرمنا الجامعي وشاهد مرافقنا ومختبراتنا ومساحات التعلم عن قرب.'
                }
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center">
                <Play className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Start Virtual Tour' : 'ابدأ الجولة الافتراضية'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
};

export default Gallery;
