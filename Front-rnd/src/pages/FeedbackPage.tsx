
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Smile, Meh, Frown, Heart } from 'lucide-react';

export default function FeedbackPage() {
  const [satisfaction, setSatisfaction] = useState<string | null>(null);
  const [liked, setLiked] = useState('');
  const [improvements, setImprovements] = useState('');
  const [recommend, setRecommend] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        satisfaction,
        liked,
        improvements,
        recommend,
        name,
        email
      });
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setSatisfaction(null);
        setLiked('');
        setImprovements('');
        setRecommend(null);
        setName('');
        setEmail('');
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold flex items-center justify-center">
                We Value Your Feedback <Heart className="ml-2 text-red-500 fill-red-500" />
              </h1>
              <p className="text-gray-600 mt-2">
                Help us improve your MotorMatch experience.
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 9L12.5 24L4.5 16" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-gray-600">
                  Your feedback has been submitted successfully. We appreciate your time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-lg font-semibold mb-4">1. How satisfied are you with MotorMatch?</h2>
                  <div className="flex justify-center space-x-8">
                    <div className="flex flex-col items-center space-y-2">
                      <button
                        type="button"
                        className={`p-4 rounded-full ${satisfaction === 'very-satisfied' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'} hover:bg-green-50 transition-colors`}
                        onClick={() => setSatisfaction('very-satisfied')}
                      >
                        <Smile className={satisfaction === 'very-satisfied' ? 'text-green-500' : ''} size={32} />
                      </button>
                      <span className="text-sm text-gray-600">Very Satisfied</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <button
                        type="button"
                        className={`p-4 rounded-full ${satisfaction === 'neutral' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'} hover:bg-blue-50 transition-colors`}
                        onClick={() => setSatisfaction('neutral')}
                      >
                        <Meh className={satisfaction === 'neutral' ? 'text-blue-500' : ''} size={32} />
                      </button>
                      <span className="text-sm text-gray-600">Neutral</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <button
                        type="button"
                        className={`p-4 rounded-full ${satisfaction === 'not-satisfied' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'} hover:bg-red-50 transition-colors`}
                        onClick={() => setSatisfaction('not-satisfied')}
                      >
                        <Frown className={satisfaction === 'not-satisfied' ? 'text-red-500' : ''} size={32} />
                      </button>
                      <span className="text-sm text-gray-600">Not Satisfied</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">2. What did you like?</h2>
                  <Textarea
                    placeholder="Tell us what you enjoyed about MotorMatch..."
                    value={liked}
                    onChange={(e) => setLiked(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">3. What could we improve?</h2>
                  <Textarea
                    placeholder="Share your suggestions for improvement..."
                    value={improvements}
                    onChange={(e) => setImprovements(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4">4. Would you recommend us to a friend?</h2>
                  <RadioGroup value={recommend || ''} onValueChange={setRecommend} className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4">5. Contact (Optional)</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full py-6"
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? 'Sending Feedback...' : 'Send Feedback'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
