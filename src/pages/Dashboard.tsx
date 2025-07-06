import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  User, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Calendar, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Clock,
  TrendingUp,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';

const Dashboard: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { user, logout: logoutUser } = useUser();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fallback user data if not available from API
  const userData = user || {
    name: language === 'en' ? 'Student' : 'طالب',
    email: 'student@stemgharbiya.edu.eg',
    grade: language === 'en' ? 'Grade' : 'الصف',
    stemField: language === 'en' ? 'STEM' : 'العلوم والتكنولوجيا',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
  };

  const menuItems = [
    {
      icon: User,
      label: language === 'en' ? 'My Profile' : 'ملفي الشخصي',
      href: '/profile'
    },
    {
      icon: BookOpen,
      label: language === 'en' ? 'Projects' : 'المشاريع',
      href: '/projects'
    },
    {
      icon: FileText,
      label: language === 'en' ? 'Resources' : 'الموارد',
      href: '/resources'
    },
    {
      icon: BarChart3,
      label: language === 'en' ? 'Grades' : 'الدرجات',
      href: '/grades'
    },
    {
      icon: Calendar,
      label: language === 'en' ? 'Calendar' : 'التقويم',
      href: '/calendar'
    },
    {
      icon: Settings,
      label: language === 'en' ? 'Settings' : 'الإعدادات',
      href: '/settings'
    }
  ];

  const quickAccessCards = [
    {
      title: language === 'en' ? 'Active Projects' : 'المشاريع النشطة',
      value: '3',
      icon: BookOpen,
      color: 'bg-blue-500',
      href: '/projects'
    },
    {
      title: language === 'en' ? 'Resources' : 'الموارد',
      value: '24',
      icon: FileText,
      color: 'bg-green-500',
      href: '/resources'
    },
    {
      title: language === 'en' ? 'Average Grade' : 'المعدل العام',
      value: '92%',
      icon: BarChart3,
      color: 'bg-purple-500',
      href: '/grades'
    },
    {
      title: language === 'en' ? 'Upcoming Events' : 'الفعاليات القادمة',
      value: '5',
      icon: Calendar,
      color: 'bg-orange-500',
      href: '/calendar'
    }
  ];

  const announcements = [
    {
      title: language === 'en' ? 'Science Fair Registration Open' : 'فتح التسجيل لمعرض العلوم',
      date: language === 'en' ? '2 hours ago' : 'منذ ساعتين',
      type: 'event'
    },
    {
      title: language === 'en' ? 'New Physics Lab Equipment' : 'معدات جديدة لمختبر الفيزياء',
      date: language === 'en' ? '1 day ago' : 'منذ يوم واحد',
      type: 'facility'
    },
    {
      title: language === 'en' ? 'Robotics Workshop Next Week' : 'ورشة الروبوتات الأسبوع القادم',
      date: language === 'en' ? '3 days ago' : 'منذ 3 أيام',
      type: 'workshop'
    }
  ];

  const upcomingDeadlines = [
    {
      title: language === 'en' ? 'Physics Project Report' : 'تقرير مشروع الفيزياء',
      date: language === 'en' ? 'Due in 2 days' : 'مطلوب خلال يومين',
      priority: 'high'
    },
    {
      title: language === 'en' ? 'Chemistry Lab Assignment' : 'واجب مختبر الكيمياء',
      date: language === 'en' ? 'Due in 5 days' : 'مطلوب خلال 5 أيام',
      priority: 'medium'
    },
    {
      title: language === 'en' ? 'Mathematics Problem Set' : 'مجموعة مسائل الرياضيات',
      date: language === 'en' ? 'Due in 1 week' : 'مطلوب خلال أسبوع',
      priority: 'low'
    }
  ];

  const handleLogout = () => {
    // Handle logout logic here
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="flex items-center ml-2 lg:ml-0">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-left">
                <div className="text-xl font-bold text-blue-900">STEM</div>
                <div className="text-sm text-blue-600">
                  {language === 'en' ? 'Gharbiya' : 'الغربية'}
                </div>
              </div>
            </Link>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-300">
              <Bell className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium text-gray-900">{userData.name}</div>
                <div className="text-xs text-gray-500">{userData.grade}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col h-full">
            {/* User Info */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{userData.name}</div>
                  <div className="text-sm text-gray-500">{userData.stemField}</div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300 group"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3 group-hover:text-blue-600" />
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors duration-300"
              >
                <LogOut className="h-5 w-5 mr-3" />
                {language === 'en' ? 'Logout' : 'تسجيل الخروج'}
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {language === 'en' ? `Welcome back, ${userData.name.split(' ')[0]}!` : `مرحبًا بعودتك، ${userData.name.split(' ')[0]}!`}
            </h1>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Here\'s what\'s happening in your STEM journey today.' 
                : 'إليك ما يحدث في رحلتك العلمية اليوم.'}
            </p>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickAccessCards.map((card, index) => (
              <Link
                key={index}
                to={card.href}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${card.color} p-3 rounded-lg`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
                <div className="text-sm text-gray-600">{card.title}</div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Announcements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  {language === 'en' ? 'Recent Announcements' : 'الإعلانات الحديثة'}
                </h2>
                <Link
                  to="/announcements"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                >
                  {language === 'en' ? 'View All' : 'عرض الكل'}
                </Link>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Bell className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">{announcement.title}</div>
                      <div className="text-sm text-gray-500">{announcement.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  {language === 'en' ? 'Upcoming Deadlines' : 'المواعيد النهائية القادمة'}
                </h2>
                <Link
                  to="/calendar"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                >
                  {language === 'en' ? 'View Calendar' : 'عرض التقويم'}
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <div className={`p-2 rounded-full ${
                      deadline.priority === 'high' ? 'bg-red-100' :
                      deadline.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                    }`}>
                      <Clock className={`h-4 w-4 ${
                        deadline.priority === 'high' ? 'text-red-600' :
                        deadline.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">{deadline.title}</div>
                      <div className="text-sm text-gray-500">{deadline.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              {language === 'en' ? 'Performance Overview' : 'نظرة عامة على الأداء'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-3">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
                <div className="text-sm text-gray-600">
                  {language === 'en' ? 'Overall Grade' : 'المعدل العام'}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full inline-block mb-3">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
                <div className="text-sm text-gray-600">
                  {language === 'en' ? 'Completed Projects' : 'المشاريع المكتملة'}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full inline-block mb-3">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-sm text-gray-600">
                  {language === 'en' ? 'Team Collaborations' : 'التعاونات الجماعية'}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;