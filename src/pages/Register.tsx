import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, GraduationCap, Mail, Lock, User, ChevronDown, Loader2, Hash, Image } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';
import { setCookie } from '../utils/cookies';

const Register: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { setUser } = useUser();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gradeLevel: '',
    code: '',
    avatar: '',
    stemField: '',
    userType: 'student',
    agreeToTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const gradeLevels = [
    { value: '10', label: language === 'en' ? '10th Grade' : 'الصف العاشر' },
    { value: '11', label: language === 'en' ? '11th Grade' : 'الصف الحادي عشر' },
    { value: '12', label: language === 'en' ? '12th Grade' : 'الصف الثاني عشر' }
  ];

  const stemFields = [
    { value: 'biology', label: language === 'en' ? 'Biology' : 'علم الأحياء' },
    { value: 'chemistry', label: language === 'en' ? 'Chemistry' : 'الكيمياء' },
    { value: 'physics', label: language === 'en' ? 'Physics' : 'الفيزياء' },
    { value: 'mathematics', label: language === 'en' ? 'Mathematics' : 'الرياضيات' }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'en' ? 'Full name is required' : 'الاسم الكامل مطلوب';
    } else if (formData.fullName.trim().split(' ').length < 2) {
      newErrors.fullName = language === 'en' ? 'Please enter your full name (first and last)' : 'يرجى إدخال الاسم الكامل (الأول والأخير)';
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Please enter a valid email' : 'يرجى إدخال بريد إلكتروني صحيح';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = language === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة';
    } else {
      if (formData.password.length < 8) {
        newErrors.password = language === 'en' ? 'Password must be at least 8 characters' : 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
      } else if (!/[A-Z]/.test(formData.password)) {
        newErrors.password = language === 'en' ? 'Password must contain at least one uppercase letter' : 'كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل';
      } else if (!/[0-9]/.test(formData.password)) {
        newErrors.password = language === 'en' ? 'Password must contain at least one number' : 'كلمة المرور يجب أن تحتوي على رقم واحد على الأقل';
      }
    }
    
    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = language === 'en' ? 'Please confirm your password' : 'يرجى تأكيد كلمة المرور';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = language === 'en' ? 'Passwords do not match' : 'كلمات المرور غير متطابقة';
    }
    
    // Grade Level validation (for students)
    if (formData.userType === 'student' && !formData.gradeLevel) {
      newErrors.gradeLevel = language === 'en' ? 'Please select your grade level' : 'يرجى اختيار مستوى الصف';
    }
    
    // Code validation (for students)
    if (formData.userType === 'student' && !formData.code.trim()) {
      newErrors.code = language === 'en' ? 'Student code is required' : 'كود الطالب مطلوب';
    } else if (formData.userType === 'student' && formData.code.trim() && !/^\d+$/.test(formData.code.trim())) {
      newErrors.code = language === 'en' ? 'Student code must contain only numbers' : 'كود الطالب يجب أن يحتوي على أرقام فقط';
    }
    
    // Avatar validation (optional but must be valid URL if provided)
    if (formData.avatar.trim() && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(formData.avatar.trim())) {
      newErrors.avatar = language === 'en' 
        ? 'Avatar must be a valid image URL (jpg, jpeg, png, gif, webp)' 
        : 'الصورة الشخصية يجب أن تكون رابط صورة صحيح (jpg, jpeg, png, gif, webp)';
    }
    
    // STEM Field validation
    if (!formData.stemField) {
      newErrors.stemField = language === 'en' ? 'Please select your STEM field' : 'يرجى اختيار مجال STEM';
    }
    
    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = language === 'en' ? 'You must agree to the terms and conditions' : 'يجب الموافقة على الشروط والأحكام';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Prepare the request payload according to the API specification
      const requestPayload = {
        name: formData.fullName,
        email: formData.email,
        grade: formData.userType === 'student' && formData.gradeLevel ? parseInt(formData.gradeLevel) : null,
        code: formData.userType === 'student' && formData.code ? parseInt(formData.code) : null,
        stemField: formData.stemField,
        avatar: formData.avatar.trim() || "", // Use provided avatar or empty string
        role: formData.userType, // 'student' or 'teacher'
        password: formData.password
      };

      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setErrors({
          email: '',
          password: '',
          general: language === 'en'
            ? (data.message || 'Registration failed. Please try again.')
            : (data.message || 'فشل في التسجيل. يرجى المحاولة مرة أخرى.')
        });
        return;
      }

      // Store user data from API response
      if (data) {
        const userId = data.id || Date.now().toString(); // Fallback ID if not provided
        setUser({
          id: userId,
          name: data.name,
          email: data.email,
          grade: data.grade,
          code: data.code,
          stemField: data.stemField,
          avatar: data.avatar,
          role: data.role
        });

        // Handle cookies if provided in response
        if (data.cookie) {
          // Set the cookie as a session cookie (will expire when browser closes)
          setCookie('acc_token', data.cookie);
          // Also set the user_id cookie
          setCookie('user_id', userId.toString());
        }

        setIsLoading(false);
        
        // Show success message briefly before navigating
        setErrors({});
        setIsSuccess(true);
        
        // Navigate to dashboard on successful registration
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 1500);
      } else {
        setIsLoading(false);
        setErrors({
          general: language === 'en'
            ? 'Registration successful but incomplete data received.'
            : 'تم التسجيل بنجاح ولكن البيانات غير مكتملة.'
        });
      }
    } catch (error) {
      setIsLoading(false);
      setErrors({
        general: language === 'en'
          ? 'Something went wrong. Please try again.'
          : 'حدث خطأ ما. يرجى المحاولة مرة أخرى.'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };
      
      // Clear student-specific fields when switching to teacher
      if (name === 'userType' && value === 'teacher') {
        newData.gradeLevel = '';
        newData.code = '';
        // Also clear any errors for student-specific fields
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.gradeLevel;
          delete newErrors.code;
          return newErrors;
        });
      }
      
      return newData;
    });
    
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

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Create Account' : 'إنشاء حساب'}
            </h1>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Join the STEM Gharbiya community' 
                : 'انضم إلى مجتمع STEM الغربية'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-600 text-sm text-center" role="alert">
                  {language === 'en' 
                    ? 'Account created successfully! Redirecting to dashboard...'
                    : 'تم إنشاء الحساب بنجاح! جاري التحويل إلى لوحة التحكم...'}
                </p>
              </div>
            )}

            {/* General Error Message */}
            {errors.general && !isSuccess && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm text-center" role="alert">
                  {errors.general}
                </p>
              </div>
            )}

            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {language === 'en' ? 'I am a:' : 'أنا:'}
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    checked={formData.userType === 'student'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {language === 'en' ? 'Student' : 'طالب'}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="teacher"
                    checked={formData.userType === 'teacher'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {language === 'en' ? 'Teacher' : 'معلم'}
                  </span>
                </label>
              </div>
            </div>

            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Full Name' : 'الاسم الكامل'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'Enter your full name' : 'أدخل اسمك الكامل'}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

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
                  placeholder={language === 'en' ? 'Enter your email address' : 'أدخل بريدك الإلكتروني'}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Avatar Field */}
            <div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Avatar Image URL (Optional)' : 'رابط الصورة الشخصية (اختياري)'}
              </label>
              <div className="relative">
                <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                    errors.avatar ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'https://example.com/your-photo.jpg' : 'https://example.com/your-photo.jpg'}
                />
              </div>
              {errors.avatar && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.avatar}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                {language === 'en' 
                  ? 'Supported formats: JPG, JPEG, PNG, GIF, WebP'
                  : 'الصيغ المدعومة: JPG, JPEG, PNG, GIF, WebP'}
              </p>
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
                  placeholder={language === 'en' ? 'Create a strong password' : 'أنشئ كلمة مرور قوية'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Confirm Password' : 'تأكيد كلمة المرور'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'Confirm your password' : 'أكد كلمة المرور'}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Grade Level (for students only) */}
            {formData.userType === 'student' && (
              <div>
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Grade Level' : 'مستوى الصف'}
                </label>
                <div className="relative">
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 appearance-none ${
                      errors.gradeLevel ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">
                      {language === 'en' ? 'Select your grade level' : 'اختر مستوى الصف'}
                    </option>
                    {gradeLevels.map(grade => (
                      <option key={grade.value} value={grade.value}>
                        {grade.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                </div>
                {errors.gradeLevel && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.gradeLevel}
                  </p>
                )}
              </div>
            )}

            {/* Student Code (for students only) */}
            {formData.userType === 'student' && (
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Student Code' : 'كود الطالب'}
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                      errors.code ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={language === 'en' ? 'Enter your student code' : 'أدخل كود الطالب'}
                  />
                </div>
                {errors.code && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.code}
                  </p>
                )}
              </div>
            )}

            {/* STEM Field */}
            <div>
              <label htmlFor="stemField" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'STEM Field of Interest' : 'مجال STEM المفضل'}
              </label>
              <div className="relative">
                <select
                  id="stemField"
                  name="stemField"
                  value={formData.stemField}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 appearance-none ${
                    errors.stemField ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">
                    {language === 'en' ? 'Select your STEM field' : 'اختر مجال STEM'}
                  </option>
                  {stemFields.map(field => (
                    <option key={field.value} value={field.value}>
                      {field.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>
              {errors.stemField && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.stemField}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {language === 'en' ? 'I agree to the ' : 'أوافق على '}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-800">
                    {language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
                  </Link>
                  {language === 'en' ? ' and ' : ' و'}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
                    {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
                  </Link>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.agreeToTerms}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[44px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  {language === 'en' ? 'Creating account...' : 'جاري إنشاء الحساب...'}
                </>
              ) : isSuccess ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  {language === 'en' ? 'Redirecting...' : 'جاري التحويل...'}
                </>
              ) : (
                language === 'en' ? 'Create Account' : 'إنشاء حساب'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {language === 'en' ? 'Already have an account? ' : 'لديك حساب بالفعل؟ '}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
              >
                {language === 'en' ? 'Sign In' : 'تسجيل الدخول'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;