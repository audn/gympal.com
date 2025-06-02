'use client';

import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState } from 'react';

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateProtein = () => {
    if (!weight || !age || !gender || !activityLevel || !goal) return;

    let weightInKg = Number.parseFloat(weight);
    if (weightUnit === 'lbs') {
      weightInKg = weightInKg / 2.205;
    }

    let baseProtein = 0.8;

    switch (activityLevel) {
      case 'sedentary':
        baseProtein = 0.8;
        break;
      case 'light':
        baseProtein = 1.0;
        break;
      case 'moderate':
        baseProtein = 1.2;
        break;
      case 'active':
        baseProtein = 1.4;
        break;
      case 'very-active':
        baseProtein = 1.6;
        break;
      case 'extremely-active':
        baseProtein = 1.8;
        break;
    }

    switch (goal) {
      case 'weight-loss':
        baseProtein *= 1.2;
        break;
      case 'muscle-gain':
        baseProtein *= 1.4;
        break;
      case 'maintenance':
        baseProtein *= 1.0;
        break;
    }

    if (gender === 'male' && Number.parseInt(age) > 50) {
      baseProtein *= 1.1;
    } else if (gender === 'female' && Number.parseInt(age) > 50) {
      baseProtein *= 1.1;
    }

    const dailyProtein = Math.round(weightInKg * baseProtein);
    setResult(dailyProtein);
  };

  const getGoalButtonColor = (currentGoal: string) => {
    const selectedColor = gender === 'male' ? 'bg-blue-500' : 'bg-pink-500';
    return goal === currentGoal ? selectedColor : 'bg-types-200';
  };

  return (
    // <div className="min-h-screen bg-types-50 px-6 text-white">
    <motion.div
      animate="enter"
      className="max-w-[48.75rem] mx-auto"
      exit="exit"
      initial="initial"
      variants={{
        initial: { opacity: 0, y: 30 },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
    >
      <NextSeo
        title="Daily Protein Calculator"
        description="Calculate your daily protein needs based on your body weight, age, gender, activity level, and fitness goals."
      />
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-types-protein rounded-full mb-4">
            <div className="w-8 h-8 bg-types-protein rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
          </div> */}
          <h1 className="text-4xl max-w-sm mx-auto font-medium text-white text-center leading-tight">
            Calculate Daily <br />
            <span className="text-types-protein">Protein</span> Intake
          </h1>
          <p className="mt-4 text-on-100 text-[17px] max-w-md mx-auto">
            Calculate how much protein you should eat per day based on your
            weight, activity level, and fitness goals.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-types-150 border-types-150">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                Personal Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-sm">Weight</Label>
                  <Input
                    type="number"
                    placeholder="70"
                    min={0}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-types-200 border-types-175 text-white placeholder-types-150"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Unit</Label>
                  <Select value={weightUnit} onValueChange={setWeightUnit}>
                    <SelectTrigger className="bg-types-200 border-types-175 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-types-200 border-types-175">
                      <SelectItem value="kg" className="text-white">
                        kg
                      </SelectItem>
                      <SelectItem value="lbs" className="text-white">
                        lbs
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Age</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-types-200 border-types-175 text-white placeholder-types-150"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm">Gender</Label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setGender('male')}
                    className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                      gender === 'male'
                        ? 'bg-blue-500 text-black'
                        : 'bg-types-200 text-on-100 border border-types-175'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                      gender === 'female'
                        ? 'bg-pink-500 text-black'
                        : 'bg-types-200 text-on-100 border border-types-175'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-types-150 border-types-150">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                Activity Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger className="bg-types-200 border-types-175 text-white">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent className="bg-types-200 border-types-175">
                  <SelectItem value="sedentary" className="text-white">
                    Sedentary
                  </SelectItem>
                  <SelectItem value="light" className="text-white">
                    Lightly Active
                  </SelectItem>
                  <SelectItem value="moderate" className="text-white">
                    Moderately Active
                  </SelectItem>
                  <SelectItem value="active" className="text-white">
                    Active
                  </SelectItem>
                  <SelectItem value="very-active" className="text-white">
                    Very Active
                  </SelectItem>
                  <SelectItem value="extremely-active" className="text-white">
                    Extremely Active
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="bg-types-150 border-types-150">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                Fitness Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <button
                  onClick={() => setGoal('weight-loss')}
                  className={cn(
                    'w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors border border-types-175',
                    getGoalButtonColor('weight-loss'),
                    goal === 'weight-loss' ? 'text-black' : 'text-on-100',
                  )}
                >
                  Weight Loss
                </button>
                <button
                  onClick={() => setGoal('maintenance')}
                  className={cn(
                    'w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors border border-types-175',
                    getGoalButtonColor('maintenance'),
                    goal === 'maintenance' ? 'text-black' : 'text-on-100',
                  )}
                >
                  Maintain Weight
                </button>
                <button
                  onClick={() => setGoal('muscle-gain')}
                  className={cn(
                    'w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors border border-types-175',
                    getGoalButtonColor('muscle-gain'),
                    goal === 'muscle-gain' ? 'text-black' : 'text-on-100',
                  )}
                >
                  Muscle Gain
                </button>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center items-center">
            <Button
              onClick={calculateProtein}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-semibold py-4 rounded-full transition-all duration-200"
              disabled={!weight || !age || !gender || !activityLevel || !goal}
            >
              Calculate Protein Needs
            </Button>
          </div>
          {result && (
            <Card className="bg-gradient-to-br from-types-protein/10 to-types-protein/5 border-types-protein/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-6xl font-bold text-types-protein mb-2">
                      {result}g
                    </div>
                    <div className="text-white text-lg font-medium mb-1">
                      Daily Protein Target
                    </div>
                    <div className="text-types-protein text-sm">
                      {(
                        result /
                        (weightUnit === 'kg'
                          ? Number.parseFloat(weight)
                          : Number.parseFloat(weight) / 2.205)
                      ).toFixed(1)}
                      g per {weightUnit === 'kg' ? 'kg' : 'lb'} bodyweight
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-types-protein/10 rounded-xl p-3 text-center">
                      <div className="text-types-protein text-lg font-bold">
                        {Math.round(result / 4)}g
                      </div>
                      <div className="text-white/70 text-sm">
                        Per meal (4 meals)
                      </div>
                    </div>
                    <div className="bg-types-protein/10 rounded-xl p-3 text-center">
                      <div className="text-types-protein text-lg font-bold">
                        {Math.round(result / 6)}g
                      </div>
                      <div className="text-white/70 text-sm">
                        Per meal (6 meals)
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-types-150 border-types-150">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <h3 className="text-lg text-green-400">Why Protein Matters</h3>
                <div className="space-y-2 text-on-100">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Supports muscle growth and repair</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Helps maintain healthy metabolism</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Keeps you feeling full longer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Essential for immune function</span>
                  </div>
                </div>
                <Link href="/blog/how-much-protein-per-body-weight">
                  <button className="mt-4 text-brand-primary-100 hover:underline">
                    Read more
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-types-100 text-xs leading-relaxed">
            This calculator provides general recommendations. Consult with a
            healthcare provider for personalized advice.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
