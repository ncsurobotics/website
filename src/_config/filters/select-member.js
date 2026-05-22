export const selectMember = (members, firstName, lastName) => {
  return members.find(member => 
    member.firstName === firstName && member.lastName === lastName
  );
};
