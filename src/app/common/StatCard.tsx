const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{number}</div>
    <div className="text-dark/70 dark:text-white/70 font-medium">{label}</div>
  </div>
);
export default StatCard;