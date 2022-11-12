import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const HideAndShowText = () => {
  return (
    <Box width='80%' margin='auto' >
       <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem  fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'>
                    If the lab test results are within normal range does the mean no illness has been detected?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                If your reports are within normal range, it is certainly good news. But normal results do not always give you a clean bill of health. If symptoms persist, your doctor will recommend other tests to detect what is triggering the unusual signs.
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem   boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'  fontSize='12px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'  >
                    what are the covid precaution pharmEasy is taking for the testing purpose?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                PharmEasy takes safety of our patients and staff very seriously. Which is why since the onset of COVID-19,
                 we formulated a 5-step safety program to offer 100% protection to all stakeholders.. Along with
                  this, NABL guidelines are followed to ensure samples are not corrupted during collection, transportation
                  or storage. Here are the safety measures that we adhere to-Vigilance about face masksHand hygiene including
                   sanitization and wearing of glovesFrequent thermal checksHygienic sample collectionCareful disposal of wasteCheck
                    flu symptoms with patients
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem  fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'>
                    Are the phlebotomists sufficienly qualified?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                PharmEasy owns 18 state-of-the-art diagnostic laboratories in the country
                 with an inhouse fleet of 500 phlebotomists across 2500+ pincodes. We have 
                 a dedicated training team for the technicians which constantly track their
                  performance on parameters like on time arrival, painless collection, adherence
                   to NABL guidelines for sample storage & transport and customer support. We have a very
                 strict hiring process which ensures that every sample collection experience is best in class.
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem  fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1'  fontSize='12px' textAlign='left'>
                    How efficient is the sample collection and analysis process?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                Utmost care is taken to collect samples while maintaining complete hygiene.
                 Only new and fresh collection kits and needles are used. After collection,
                  the sample is immediately transferred into an icebox to prevent degradation 
                  and bacterial build-up which may lead to inaccurate diagnosis. The samples
                   are barcode tagged to prevent mix up and in the laboratories, technicians use
                    high-end, state-of-the-art devices to analyse the samples.
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem   fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1'  fontSize='12px' textAlign='left'>
                    why are lab test essential?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                Lab tests or diagnostic tests are recommended by doctors when they suspect 
                that there might be something wrong with your health. Samples of your blood,
                 stool, urine, or mucus can reveal a lot about the state of your health when
                  analysed with special devices. Once the problem is detected, your doctor
                 can diagnose and put you on medication or suggest a course of treatment.
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem  fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'>
                    How long does it take the report to be dilivered?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                It takes 24-48 hours for the lab to prepare your report and have it delivered to you.
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem   fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'>
                    How should one prepare for a lab test?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                Different tests have different requirements. Some may need
                 to be on an empty stomach whereas, for some other tests,
                  you may need to consume food before the sample is collected.
                   Speak with your doctor regarding what you need to do to prepare for a 
                lab test. Let your doctor know if you are already on any medication.
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem  fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'>
                    Section 1 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem   fontSize='12px' boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='15px'>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'  fontSize='12px'>
                    How are lab test report interpreted?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='RGBA(0, 0, 0, 0.50)'>
                The reports that our labs will deliver to you will be quite detailed. 
                There will be charts of reference ranges to help you understand the report
                 and a statement from a qualified doctor. But, once you receive your report,
                  it is best to consult your doctor and ask him/her to explain it to you.
                
                </AccordionPanel>
            </AccordionItem>

            
            </Accordion>
    </Box>
  )
}

export default HideAndShowText