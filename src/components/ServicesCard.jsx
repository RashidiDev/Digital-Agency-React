export default function ServicesCard(props) {
  return (
    <div className="p-[3.125rem] ring-1 ring-gray-800">
      <div className="primary-icon-50 sm:primary-icon-sm mb-[1.875rem]">{props.icon}</div>
      <p>{props.text}</p>
    </div>
  );
}
