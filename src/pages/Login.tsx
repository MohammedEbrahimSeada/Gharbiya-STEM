import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, GraduationCap, Mail, Lock, Loader2 } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';
import { setCookie } from '../utils/cookies';

const Login: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the intended destination from the location state
  const from = location.state?.from?.pathname || '/dashboard';
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Please enter a valid email' : 'يرجى إدخال بريد إلكتروني صحيح';
    }
    
    if (!formData.password) {
      newErrors.password = language === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 8) {
      newErrors.password = language === 'en' ? 'Password must be at least 8 characters' : 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        remember: formData.rememberMe
      })
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setErrors({
          email: '',
          password: language === 'en'
            ? (data.message || 'Invalid email or password')
            : (data.message || 'البريد الإلكتروني أو كلمة المرور غير صحيحة')
        });
        return;
      }

      // Store user data from API response
      if (data.user) {
        setUser({
          id: data.id,
          name: data.user.name || data.user.firstName + ' ' + data.user.lastName,
          email: data.user.email,
          grade: data.user.grade,
          stemField: data.user.stemField,
          avatar: data.user.avatar,
          role: data.user.role
        });
      }

      // Store authentication token if provided
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      // Handle acc_token and user_id cookies when remember me is checked
      if (data.acc_token && formData.rememberMe) {
        // Set the acc_token as a cookie with 30-day expiration for remember me
        setCookie('acc_token', data.acc_token, 30);
        // Set the user_id as a cookie with 30-day expiration for remember me
        if (data.id) {
          setCookie('user_id', data.id.toString(), 30);
        }
      } else if (data.acc_token && !formData.rememberMe) {
        // Set session cookie (expires when browser closes) if remember me is not checked
        setCookie('acc_token', data.acc_token);
        // Set the user_id as a session cookie
        if (data.id) {
          setCookie('user_id', data.id.toString());
        }
      }

      // Navigate to dashboard on successful login
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);
      setErrors({
      email: '',
      password: language === 'en'
        ? 'Something went wrong. Please try again.'
        : 'حدث خطأ ما. يرجى المحاولة مرة أخرى.'
      });
    }
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard on successful login
      navigate(from, { replace: true });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-48 h-20 bg-white rounded-lg shadow-md mb-4">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
            <div className="text-left">
              <div className="text-xl font-bold text-blue-900">STEM</div>
              <div className="text-sm text-blue-600">
                {language === 'en' ? 'Gharbiya' : 'الغربية'}
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Welcome Back' : 'مرحبًا بعودتك'}
            </h1>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Sign in to your STEM Gharbiya account' 
                : 'سجل الدخول إلى حساب STEM الغربية'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Password' : 'كلمة المرور'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'Enter your password' : 'أدخل كلمة المرور'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors duration-300"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {language === 'en' ? 'Remember me' : 'تذكرني'}
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                {language === 'en' ? 'Forgot password?' : 'نسيت كلمة المرور؟'}
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[44px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  {language === 'en' ? 'Signing in...' : 'جاري تسجيل الدخول...'}
                </>
              ) : (
                language === 'en' ? 'Sign In' : 'تسجيل الدخول'
              )}
            </button>
          </form>

          {/* Create Account Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {language === 'en' ? "Don't have an account? " : 'ليس لديك حساب؟ '}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
              >
                {language === 'en' ? 'Create Account' : 'إنشاء حساب'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;