import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { PAGE_TITLES } from 'src/constants';
import PageTitle from 'src/components/PageTitle';
import { BasicLayout } from 'src/layouts';
import { PageDescription, StyledFooterText, StyledNavLink } from 'src/pages/Subscriber/Subscriber.styles';
import { ReactComponent as EndpointsInsider } from 'src/assets/icons/endpoints-insider-logo.svg';
import { ReactComponent as EndpointsEnterprise } from 'src/assets/icons/endpoints-enterprise-logo.svg';
import { ReactComponent as CheckboxCircleIconBlue } from 'src/assets/icons/check-box-circle-icon-blue.svg';
import { ReactComponent as CheckboxCircleIconGold } from 'src/assets/icons/check-box-circle-icon-gold.svg';
import { SubscriberSection } from 'src/components/SubscriberSection';

export const featuresInsider = [
    <>
        <span>Unlimited access</span>&nbsp;
        to all our exclusives, reports and breaking news.
    </>,
    <>
        <span>Subscriber-only content</span>,&nbsp;
        including Bioregnum – our Founding Editor&apos;s take on the industry.
    </>,
    <>
        <span>Event discounts</span>,&nbsp;
        get priority access and special discounts to Endpoints events around the world.
    </>,
];

export const featuresEnterprise = [
    <>
        <span>Unlimited access</span>&nbsp;
        to all our exclusives, reports and breaking news, for <span>everyone in your company</span> domain.
    </>,
    <>
        <span>Subscriber-only content</span>,&nbsp;
        including Bioregnum – our Founding Editor&apos;s take on the industry.
    </>,
    <>
        <span>Two featured job postings</span>,&nbsp;
        valued at $1,800 on Endpoints Careers.
    </>,
    <>
        <span>Corporate intranet access</span>&nbsp;
        to add the latest news in your internal communications.
    </>,
];

const SubscriberPage: FC = () => {
    return (
        <BasicLayout testId="subscriber-page">
            <Stack data-testid="subscriber-panel" alignItems="center" direction="column">
                <PageTitle
                    paddingTop={{
                        xs: 0,
                        sm: 0.5,
                    }}
                    textAlign={{
                        xs: 'left',
                        sm: 'center',
                    }}
                    title={PAGE_TITLES.SUBSCRIBER}
                >
                    <PageDescription>
                        Join our community of industry-leaders and get unlimited access to Endpoints News.
                        When you become a premium subscriber, you directly support our mission to be the
                        essential read for biotech and biopharma professionals.
                    </PageDescription>
                </PageTitle>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    justifyContent="center"
                    gap={{
                        xs: 2.5,
                        sm: 3,
                    }}
                    paddingTop={{
                        xs: 2,
                        sm: 3,
                    }}
                >
                    <SubscriberSection
                        isStyledButton={false}
                        logoComponent={EndpointsInsider}
                        price="$400/year"
                        PriceDescription="Unlimited access, just for you."
                        features={featuresInsider}
                        IconComponent={CheckboxCircleIconBlue}
                        buttonLabel="Upgrade to Insider now"
                        buttonLink="/upgrade/insider"
                    />
                    <SubscriberSection
                        logoComponent={EndpointsEnterprise}
                        price="Tailored pricing"
                        PriceDescription="Unlimited access for you and your team."
                        caption="Enquire today and a member of our team will be in touch."
                        features={featuresEnterprise}
                        IconComponent={CheckboxCircleIconGold}
                        buttonLabel="Request a quote"
                        buttonLink="/upgrade/request-a-quote"
                        isStyledButton={true}
                    />
                </Stack>
                <StyledFooterText>
                    Now a part of the Financial Times family, our ambitions are
                    stronger than ever to give you the essential news, information,
                    and insights you need to stay ahead.
                </StyledFooterText>
                <Box
                    minWidth="100%"
                    paddingTop={1}
                    textAlign={{
                        xs: 'left',
                        sm: 'center',
                    }}
                >
                    <StyledNavLink to="/paid-subscription-terms-and-conditions">
                        Terms and Conditions
                    </StyledNavLink>
                </Box>
            </Stack>
        </BasicLayout>
    );
};

export default SubscriberPage;
