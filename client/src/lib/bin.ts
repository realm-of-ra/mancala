// import { useComponentValue } from "@dojoengine/react";
// import { Entity } from "@dojoengine/recs";
// import { useEffect, useState } from "react";
// import { getEntityIdFromKeys } from "@dojoengine/utils";
// import { useDojo } from "./dojo/useDojo";

// const {
//   setup: {
//     systemCalls: { spawn, move },
//     clientComponents: { Moves },
//   },
//   account,
// } = useDojo();

// const [clipboardStatus, setClipboardStatus] = useState({
//   message: "",
//   isError: false,
// });

// // entity id we are syncing
// const entityId = getEntityIdFromKeys([
//   BigInt(account?.account.address),
// ]) as Entity;

// // get current component values
// const moves = useComponentValue(Moves, entityId);

// console.log(moves);

// const handleRestoreBurners = async () => {
//   try {
//     await account?.applyFromClipboard();
//     setClipboardStatus({
//       message: "Burners restored successfully!",
//       isError: false,
//     });
//   } catch (error) {
//     setClipboardStatus({
//       message: `Failed to restore burners from clipboard`,
//       isError: true,
//     });
//   }
// };

// useEffect(() => {
//   if (clipboardStatus.message) {
//     const timer = setTimeout(() => {
//       setClipboardStatus({ message: "", isError: false });
//     }, 3000);

//     return () => clearTimeout(timer);
//   }
// }, [clipboardStatus.message]);
