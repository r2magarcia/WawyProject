// import React from "react";
// import { Form } from "react-bootstrap";
// export default function TaskTracker(props: {activity: any}) {
//     return(
//         <><Form.Control
//             type="text"
//             placeholder="Readonly input here..."
//             className="inline"
//             value={activity.name}
//             onChange={(e) => handleChangeAfternoonName(e)} /><div className="checkboxes-container">
//                 {activity.check.map(
//                     (checkBox: boolean, idxCheckbox: number) => (
//                         <Form.Check
//                             inline
//                             key={idxCheckbox}
//                             type="checkbox"
//                             checked={checkBox}
//                             aria-label={`default checkbox`}
//                             onChange={(e) => handleChangeAfternoonCheckBox(
//                                 e,
//                                 idxActividad,
//                                 idxCheckbox
//                             )} />
//                     )
//                 )}
//             </div></>
//     )
// }