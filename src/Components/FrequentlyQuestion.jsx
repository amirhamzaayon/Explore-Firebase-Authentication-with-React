import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FrequentlyQuestion = () => {
  return (
    <div>
      <div>
        <h2 className="mb-6 text-2xl font-bold text-center">
          Know More About Our Tours
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full px-4 border-2 rounded-lg"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            1. What types of tours do you offer?
          </AccordionTrigger>
          <AccordionContent>
            We offer a diverse range of tours including city sightseeing,
            cultural experiences, adventure tours, food and culinary
            explorations, historical walks, and customized private excursions.
            All our tours are designed to provide authentic local experiences
            with knowledgeable guides.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2. How do I book a tour?</AccordionTrigger>
          <AccordionContent>
            Booking a tour is easy! Simply browse our available tours, select
            your preferred date and time, choose the number of participants, and
            complete the checkout process. You'll receive an immediate
            confirmation email with all the details and meeting point
            information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. What is your cancellation policy?
          </AccordionTrigger>
          <AccordionContent>
            We understand plans can change. Tours can be canceled up to 48 hours
            before the scheduled start time for a full refund. Cancellations
            within 48 hours may be eligible for partial refunds or rescheduling
            options, depending on the specific tour. Weather-related
            cancellations qualify for full refunds or rebooking.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            4. Are your tours suitable for children?
          </AccordionTrigger>
          <AccordionContent>
            Many of our tours are family-friendly and suitable for children of
            various ages. Each tour listing includes age recommendations and
            difficulty levels. We also offer specialized family tours with
            activities designed specifically for younger explorers. Contact us
            for personalized recommendations for touring with children.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. What should I bring on the tour?
          </AccordionTrigger>
          <AccordionContent>
            Essential items include comfortable walking shoes,
            weather-appropriate clothing, a water bottle, sunscreen, and your
            camera. Tour-specific requirements will be mentioned in your booking
            confirmation. Some tours provide equipment or refreshments, while
            others may require you to bring specific items.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. Are private or customized tours available?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! We specialize in creating personalized experiences. Our
            private tours can be customized to your interests, pace, and
            schedule. Whether you're planning a special occasion, corporate
            event, or simply prefer a more exclusive experience, our team can
            design the perfect itinerary for your needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
