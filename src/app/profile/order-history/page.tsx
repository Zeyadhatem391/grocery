// async function test() {
//   const data = await getOrderHistory();
//   console.log(data);
// }

import OrderhistoryClient from "./OrderhistoryClient";

function OrderhistoryPage() {
  // test();

  return (
    <div>
      <OrderhistoryClient />
    </div>
  );
}

export default OrderhistoryPage;
