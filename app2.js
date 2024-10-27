const hospital = {
    name: "City Health Center",
    location: {
      address: {
        street: "123 Wellness Ave",
        city: "Healthville",
        state: {
          name: "MediState",
          code: "MS"
        },
        country: {
          name: "Careland",
          code: "CL"
        }
      },
      departments: {
        emergency: {
          floor: 1,
          head: "Dr. Meredith Grey",
          facilities: {
            beds: 50,
            operatingRooms: 5,
            triageUnits: 10
          }
        },
        cardiology: {
          floor: 3,
          head: "Dr. Cristina Yang",
          facilities: {
            ICU: {
              beds: 20,
              nurseStation: {
                headNurse: "Nurse Jackie",
                contact: {
                  phone: "123-456-9999",
                  email: "nurse.jackie@healthcenter.com"
                }
              }
            },
            regularWard: {
              beds: 50,
              doctorOnCall: "Dr. Derek Shepherd"
            }
          }
        }
      }
    },
    staff: {
      doctors: {
        chiefMedicalOfficer: {
          name: "Dr. Richard Webber",
          experience: "30 years",
          contact: {
            phone: "123-555-7890",
            email: "dr.webber@healthcenter.com"
          }
        },
        residentDoctors: {
          senior: {
            name: "Dr. Miranda Bailey",
            specialty: "General Surgery",
            experience: "15 years"
          },
          junior: {
            name: "Dr. Alex Karev",
            specialty: "Pediatrics",
            experience: "5 years"
          }
        }
      },
      nurses: {
        headNurse: "Nurse Carol Hathaway",
        departments: {
          emergency: {
            head: "Nurse Peter Benton",
            staffCount: 30
          },
          cardiology: {
            head: "Nurse Lucy Knight",
            staffCount: 25
          }
        }
      }
    }
  };
  
  
  let{
    name,
    location:{
        address:{
            street,
            city,
            state:{
                name:name1,
                code,

            },
            country:{
                name:name2,
                code:code1,
            }
        },
        departments:{
            emergency:{
                floor,
                head,
                facilities:{
                    beds,
                    operatingRooms,
                    triageUnits,
                }
            },
            cardiology:{
                floor:floor1,
                head:head1,
                facilities:{
                    ICU:{
                        beds:beds1,
                        nurseStation:{
                            headNurse,
                            contact:{
                                phone,
                                email,
                            }
                        },
                    },
                    regularWard:{
                        beds:beds2,
                        doctorOnCall,
                    }
                }
            }
        }
    },

    staff:{
        doctors:{
            chiefMedicalOfficer:{
                name:name3,
                experience,
                contact:{
                    phone:phone1,
                    email:email1,

                }
            },
            residentDoctors:{
                senior:{
                    name:name4,
                    specialty,
                    experience:experience1,
                },
                junior:{
                    name:name5,
                    specialty:specialty1,
                    experience:experience2,
                }
            }









        },

        nurses:{
            headNurse:headNurse1,
            departments:{
                emergency:{
                    head:head2,
                    staffCount,
                },
                cardiology:{
                    head:head3,
                    staffCount:staffCount1
                }
                   

                
            }

        }
    }

        
  
  }=hospital;

  console.log(

    street,
    city,
    name1,
    name,
    code,
    name2,
    code1,
    floor,
    head,
    beds,
    operatingRooms,
    triageUnits,
    floor1,
    head1,
    beds1,
    headNurse,
    phone,
    email,
    beds2,
    doctorOnCall,
    name3,
    experience,
    phone1,
    email1,
    name4,
    specialty,
    experience1,
    specialty1,
    experience2






  );