import { MapPin, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground text-center mb-12">
          Visit Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground">
                  Karachi Fish On Fire
                  <br />
                  Canal Rd, near Lahore Medical &amp; Dental College,
                  <br />
                  Lahore Medical Housing Society, Lahore
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Sun: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk&q=Karachi+fishonfire,+Canal+Rd,+near+lahore+medical+%26+dental+college,+Lahore+Medical+Housing+Society,+Lahore"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karachi Fish On Fire Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
