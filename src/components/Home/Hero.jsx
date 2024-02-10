import React from 'react';

function Hero() {
  return (
    <div className="flex p-32 gap-10 max-sm:flex-col max-sm:px-5">
      <div className="w-2/5 text-gray-600 leading-relaxed max-sm:w-full">
        <h1 className="font-medium" style={{ fontSize: '2rem' }}>
          Trust with confidence
        </h1>
        <div className="py-10">
          <h3 className="text-lg font-medium pb-2">Customer-first always</h3>
          <p>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
        </div>

        <div className="pb-10">
          <h3 className="text-lg font-medium pb-2">No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
        </div>

        <div className="pb-10">
          <h3 className="text-lg font-medium pb-2">The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
        </div>

        <div className="pb-10">
          <h3 className="text-lg font-medium pb-2">Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
      </div>

      <div className="w-3/5 text-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:w-full">
        <div className="pb-10 max-sm:flex max-sm:justify-center">
          <img
            className="size-11/12 max-sm:size-3/4"
            src="https://zerodha.com/static/images/ecosystem.png"
            alt=""
          />
        </div>
        <div className="flex justify-center gap-5 text-blue-600 font-medium">
          <button>
            Explore out products <i class="ri-arrow-right-line"></i>
          </button>
          <button>
            Try Kite demo <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
