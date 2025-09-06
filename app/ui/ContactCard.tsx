import PrimaryButton from "@/app/ui/PrimaryButton";

const ContactCard = () => {
  return (
    <div className="bg-[var(--bg-color)] border-2 border-[var(--border-color)] flex flex-col text-center rounded-3xl justify-center items-center flex-1 p-10 gap-4">
      <div>
        <h3 className="text-2xl font-semibold mb-1">Contact us</h3>
        <p className="subP">
          We welcome your suggestions and always ready to help you.
        </p>
        <p className="subP">Feel free to reach us.</p>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center">
        <PrimaryButton name="Contact us" bLink="/contact" />
      </div>
    </div>
  );
};

export default ContactCard;
