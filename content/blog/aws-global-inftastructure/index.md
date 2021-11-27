---
title: AWS Global Infrastructure date: '2021-07-20T20:00:00.000Z' tags: [aws, cloud]
---

AWS being the biggest global cloud provider, by necessity needs to organize its infrastructure into multiple types or
organisational units. Amazon uses the geographical localisation of its data centres as a base for this division. While
understanding how this affects you as a developer is a relatively simple task, there are some hidden details worth
knowing.

At the top of the hierarchy AWS places the notion of Regions. Those are groups of data centres located close to each
other (close on the global scale). You meet this regional separation right in the AWS Management Console (among other
places) where you're expected to pick the region you're going to be operating in with your infrastructure.

Most AWS services are scoped to regions—with IAM being the notable exception—and not all regions are functionally
similar. You might find out some services you wanted to use are not available if you don't pick the right region. The
special region that usually gets the updates first is the origin region of North Virginia (`us-est-1`), though it has
the reputation of being the least stable.

When it comes to selecting the region appropriate for your deployment, other than the services' availability, you need
to consider two more important decision factors. You need to understand the legal requirements regarding data collection
and its physical storage location, and you need to know where your users are going to be using your app to ensure the
lowest possible latencies when they'll be accessing your app.

Each region is further divided into Availability Zones. Zones are group pf one or more data centres and are located
close enough to each other to make the communication between them fast, but far enough to minimise the risk of disasters
affecting all of them at once.

The primary purpose of the Availability Zone is to allow you to add some resiliency to your infrastructure. When
something bad happens in one zone, with a proper setup you'll be able to forward traffic to another zone keeping your
application available for the users.

Parallel to Regions, AWS is using Edge Network which is a CloudFront infrastructure located throughout the world with
much higher global coverage than Regions. This network's purpose is to increase the delivery speed of data to end users
residing in places further away from regional AWS infrastructure.

This network, other than being a simple delivery service, adds the ability for apps developers to use some dynamic
features that still require fast response time. It's done by using CloudFront Function or Lambda@Edge services. It's
also a place of some security features, like DDoS protection or access control.

Regions, Availability Zones and Edge Network are the most important concepts when learning about how AWS works. There
are, however, some other services AWS provides with the localisation in mind.

Local Zones are extensions of Regions and are designed to allow fast access to computing power and storage in proximity
of large populations. Currently, they're available only in the United States and host services like EC2, RDS, EBS and
few others.

When a company needs their data to be kept on-premise, AWS offers the Outposts service. It's simply a physical
infrastructure that's placed on location and is managed by Amazon. Other than latency and compliance, Outposts gives
developers the ability to use the same API of AWS when creating the internal tooling to handle the local data.

The advent of 5G network brought AWS Wavelength service. It's a new type of zone that's placed inside the network
providers' infrastructure that allow low latency features for mobile and IoT devices. This service is only available in
a few countries, but some special types of apps might want to get advantage of the possibilities enabled there.

To learn more about AWS Global infrastructure, visit the following resources:

- [About AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)
- [CloudFront Key Features](https://aws.amazon.com/cloudfront/features/)
