const company = {
    name: "Global Tech Solutions",
    headquarters: {
      address: {
        street: "789 Innovation Blvd",
        city: "Tech City",
        state: {
          name: "Innovatia",
          code: "IN"
        },
        country: {
          name: "Technoland",
          code: "TN"
        }
      },
      offices: {
        northAmerica: {
          regionalHead: "Ms. Susan Clarke",
          contact: {
            phone: "456-789-1234",
            email: "susan@globaltech.com"
          },
          departments: {
            software: {
              head: "Mr. John Doe",
              teamLead: {
                name: "Ms. Alice Johnson",
                contact: {
                  email: "alice@globaltech.com",
                  phone: "456-123-7890"
                }
              }
            },
            hr: {
              head: "Mrs. Sarah Connors",
              teamLead: {
                name: "Mr. Bruce Wayne",
                contact: {
                  email: "bruce@globaltech.com",
                  phone: "456-456-7899"
                }
              }
            }
          }
        },
        europe: {
          regionalHead: "Mr. Liam O'Sullivan",
          contact: {
            phone: "789-456-3210",
            email: "liam@globaltech.com"
          },
          departments: {
            marketing: {
              head: "Ms. Natasha Romanoff",
              teamLead: {
                name: "Mr. Steve Rogers",
                contact: {
                  email: "steve@globaltech.com",
                  phone: "123-321-4567"
                }
              }
            },
            finance: {
              head: "Mr. Tony Stark",
              teamLead: {
                name: "Ms. Pepper Potts",
                contact: {
                  email: "pepper@globaltech.com",
                  phone: "987-654-3210"
                }
              }
            }
          }
        }
      }
    },
    staff: {
      CEO: {
        name: "Mr. Elon Musk",
        experience: "20 years",
        contact: {
          email: "elon@globaltech.com",
          phone: "999-888-7777"
        }
      },
      executives: {
        CTO: {
          name: "Ms. Sheryl Sandberg",
          experience: "18 years",
          contact: {
            email: "sheryl@globaltech.com",
            phone: "555-555-5555"
          }
        },
        CFO: {
          name: "Mr. Warren Buffett",
          experience: "25 years",
          contact: {
            email: "warren@globaltech.com",
            phone: "444-444-4444"
          }
        }
      }
    }
  };

  let{
    name,

    headquarters:{
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

        offices:{

            northAmerica:{
                regionalHead,

                contact:{
                    phone,
                    email,

                },

                departments:{
                    software:{
                        head,
                        teamLead:{
                            name:name3,
                            contact:{
                                email:email1,
                                phone:phone1,
                            }
                        }
                    },
                    hr:{

                        head:head1,
                        teamLead:{
                            name:name4,
                            contact:{
                                email:email2,
                                phone:phone2,
                            }
                        }

                    }
                }
            },

            europe:{
                regionalHead:regionalHead1,
                contact:{
                    phone:phone3,
                    email:email3,
                },

                departments:{
                    marketing:{
                        head:head2,
                        teamLead:{
                            name:name5,
                            contact:{
                                email:email4,
                                phone:phone4,
                            }
                        }
                    },

                    finance:{
                        head:head3,
                        teamLead:{
                            name:name6,
                            contact:{
                                email:email5,
                                phone:phone5,
                            }
                        }
                    }
                }
            }
            
        }
    },

    staff:{
        CEO:{
            name:name7,
            experience,
            contact:{
                email:email6,
                phone:phone6,
            }
        },
        executives:{
            CTO:{
                name:name8,
                experience:experience1,
                contact:{
                    email:email7,
                    phone:phone7,
    
                }
            },

            CFO:{
                name:name9,
                experience:experience2,

                contact:{
                    email:email8,
                    phone:phone8,

              }
             }
        }

    }



  }=company;


  console.log(


    name,
    street,
    city,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
    name9,
    code,
    code1,
    regionalHead,
    regionalHead1,
    phone,
    phone1,
    phone2,
    phone3,
    phone4,
    phone5,
    phone6,
    phone7,
    phone8,
    email,
    email1,
    email2,
    email3,
    email4,
    email5,
    email6,
    email7,
    email8,
    experience,
    experience1,
    experience2,



  );