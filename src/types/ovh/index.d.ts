
/**
 * Types for OVHcloud API
 * This file has been automatically created. Do not edit it.
 * Creation date: 2023-06-08T14:00:18.357Z
 * Author: Jonathan Perchoc 
*/
declare namespace ovhapi {
    namespace cloud {
        namespace authentication {
            /** Catalog */
            interface Catalog {
                /** endpoints */
                endpoints: cloud.authentication.Endpoint[];
                /** id */
                id: string;
                /** type */
                type: string;
            }
            /** Domain */
            interface Domain {
                /** name */
                name: string;
            }
            /** Endpoint */
            interface Endpoint {
                /** id */
                id: string;
                /** interface */
                interface: string;
                /** legacy_endpoint_id */
                legacy_endpoint_id: string;
                /** region_id */
                region_id: string;
                /** service_id */
                service_id: string;
                /** url */
                url: string;
            }
            /** OpenstackToken */
            interface OpenstackToken {
                /** catalog */
                catalog: cloud.authentication.Catalog[];
                /** expires_at */
                expires_at: string;
                /** issued_at */
                issued_at: string;
                /** methods */
                methods: string[];
                /** project */
                project: cloud.authentication.TokenProject;
                /** roles */
                roles: cloud.authentication.Role[];
                /** user */
                user: cloud.authentication.UserToken;
            }
            /** Role */
            interface Role {
                /** id */
                id: string;
                /** name */
                name: string;
            }
            /** Token */
            interface Token {
                /** X-Auth-Token */
                "X-Auth-Token": string;
                /** token */
                token: cloud.authentication.OpenstackToken;
            }
            /** TokenProject */
            interface TokenProject {
                /** domain */
                domain: cloud.authentication.Domain;
                /** id */
                id: string;
                /** name */
                name: string;
            }
            /** UserToken */
            interface UserToken {
                /** domain */
                domain: cloud.authentication.Domain;
                /** id */
                id: string;
                /** name */
                name: string;
            }
        }
        namespace billingView {
            /** BandwidthInstance */
            interface BandwidthInstance {
                /** Total bandwidth in GiB */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
            /** BandwidthStorage */
            interface BandwidthStorage {
                /** Total bandwidth in GiB */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
            /** Component */
            interface Component {
                /** Name of the component */
                name: string;
                /** Total quantity for the component */
                quantity: cloud.billingView.Quantity;
                /** Total price for this component */
                totalPrice: double;
            }
            /** HourlyInstance */
            interface HourlyInstance {
                /** Details about hourly instances */
                details: cloud.billingView.HourlyInstanceDetail[];
                /** Hours of run instances */
                quantity: cloud.billingView.Quantity;
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: double;
            }
            /** HourlyInstanceBandwidth */
            interface HourlyInstanceBandwidth {
                /** Instance incoming bandwidth details */
                incomingBandwidth ? : cloud.billingView.BandwidthInstance;
                /** Instance outgoing bandwidth details */
                outgoingBandwidth ? : cloud.billingView.BandwidthInstance;
                /** Region */
                region: string;
                /** Total price */
                totalPrice: double;
            }
            /** HourlyInstanceDetail */
            interface HourlyInstanceDetail {
                /** Instance ID */
                instanceId: string;
                /** Hours of run instances */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
            /** HourlyInstanceOption */
            interface HourlyInstanceOption {
                /** Details about hourly instances option */
                details: cloud.billingView.HourlyInstanceOptionDetail[];
                /** Quantity of instance hours running with this option */
                quantity: cloud.billingView.Quantity;
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: double;
            }
            /** HourlyInstanceOptionDetail */
            interface HourlyInstanceOptionDetail {
                /** Instance ID */
                instanceId: string;
                /** Quantity of instance hours running with this option */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
            /** HourlyResources */
            interface HourlyResources {
                /** Details about hourly instances */
                instance: cloud.billingView.HourlyInstance[];
                /** Details about instances bandwidth consumption */
                instanceBandwidth: cloud.billingView.HourlyInstanceBandwidth[];
                /** Details about hourly instances options */
                instanceOption: cloud.billingView.HourlyInstanceOption[];
                /** Details about hourly snapshots */
                snapshot: cloud.billingView.HourlySnapshot[];
                /** Details about hourly storage */
                storage: cloud.billingView.HourlyStorage[];
                /** Details about hourly volumes */
                volume: cloud.billingView.HourlyVolume[];
            }
            /** HourlySnapshot */
            interface HourlySnapshot {
                /** Instance snapshot details */
                instance ? : cloud.billingView.InstanceSnapshot;
                /** Region */
                region: string;
                /** Total price */
                totalPrice: double;
                /** Volume snapshot details */
                volume ? : cloud.billingView.VolumeSnapshot;
            }
            /** HourlyStorage */
            interface HourlyStorage {
                /** Bucket Name */
                bucketName ? : string;
                /** Storage incoming bandwidth details */
                incomingBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Storage incoming internal bandwidth details */
                incomingInternalBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Storage outgoing bandwidth details */
                outgoingBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Storage outgoing internal bandwidth details */
                outgoingInternalBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Region */
                region: string;
                /** Information about stored data */
                stored ? : cloud.billingView.StoredStorage;
                /** Total price */
                totalPrice: double;
                /** Storage type */
                type: cloud.billingView.StorageTypeEnum;
            }
            /** HourlyVolume */
            interface HourlyVolume {
                /** Detail about volume consumption */
                details: cloud.billingView.HourlyVolumeDetail[];
                /** Total GiBh of volume */
                quantity: cloud.billingView.Quantity;
                /** Region */
                region: string;
                /** Total price */
                totalPrice: double;
                /** Volume type */
                type: string;
            }
            /** HourlyVolumeDetail */
            interface HourlyVolumeDetail {
                /** GiBh of volume */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
                /** Volume ID */
                volumeId: string;
            }
            /** InstanceSnapshot */
            interface InstanceSnapshot {
                /** GiBh stored */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyCertification */
            interface MonthlyCertification {
                /** Details about certifications */
                details: cloud.billingView.MonthlyCertificationDetail[];
                /** Certification reference */
                reference: string;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyCertificationDetail */
            interface MonthlyCertificationDetail {
                /** Certification activation */
                activation: string;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyInstance */
            interface MonthlyInstance {
                /** Details about monthly instances */
                details: cloud.billingView.MonthlyInstanceDetail[];
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyInstanceDetail */
            interface MonthlyInstanceDetail {
                /** Monthly instance activation */
                activation: string;
                /** Instance ID */
                instanceId: string;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyInstanceOption */
            interface MonthlyInstanceOption {
                /** Details about monthly instances */
                details: cloud.billingView.MonthlyInstanceOptionDetail[];
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyInstanceOptionDetail */
            interface MonthlyInstanceOptionDetail {
                /** Instance ID */
                instanceId: string;
                /** Total price */
                totalPrice: double;
            }
            /** MonthlyResources */
            interface MonthlyResources {
                /** Details about certifications */
                certification ? : cloud.billingView.MonthlyCertification[];
                /** Details about monthly instances */
                instance: cloud.billingView.MonthlyInstance[];
                /** Details about monthly instances options */
                instanceOption: cloud.billingView.MonthlyInstanceOption[];
            }
            /** Quantity */
            interface Quantity {
                /** Quantity unit */
                unit: cloud.billingView.UnitQuantityEnum;
                /** Quantity value */
                value: double;
            }
            /** RegionalizedResource */
            interface RegionalizedResource {
                /** List of components */
                components: cloud.billingView.Component[];
                /** Region of the resource */
                region: string;
            }
            /** StorageTypeEnum */
            enum StorageTypeEnum {
                "pca",
                "pcs",
                "storage-coldarchive",
                "storage-high-perf",
                "storage-standard"
            }
            /** StoredStorage */
            interface StoredStorage {
                /** GiBh stored */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
            /** TypedResources */
            interface TypedResources {
                /** Resources per region */
                resources: cloud.billingView.RegionalizedResource[];
                /** Total price */
                totalPrice: double;
                /** Type of the resources */
                type: string;
            }
            /** UnitQuantity */
            enum UnitQuantityEnum {
                "GiB",
                "GiBh",
                "Hour",
                "Minute",
                "Second",
                "Unit"
            }
            /** UsedCredit */
            interface UsedCredit {
                /** Credit description */
                description: string;
                /** Credit ID */
                id: number;
                /** Total credit used */
                usedAmount: double;
            }
            /** UsedCredits */
            interface UsedCredits {
                /** Details about credits that will be used */
                details: cloud.billingView.UsedCredit[];
                /** Total credit that will be used to pay the bill */
                totalCredit: double;
            }
            /** VolumeSnapshot */
            interface VolumeSnapshot {
                /** GiBh stored */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: double;
            }
        }
        namespace capabilities {
            /** Public Cloud products availability */
            interface Availability {
                /** Plan availability */
                plans: cloud.capabilities.AvailabilityPlan[];
                /** Product availability */
                products: cloud.capabilities.AvailabilityProduct[];
            }
            /** Public Cloud plan availability */
            interface AvailabilityPlan {
                /** Plan code */
                code: string;
                /** Plan is available on those regions */
                regions: cloud.capabilities.AvailabilityRegion[];
            }
            /** Public Cloud product availability */
            interface AvailabilityProduct {
                /** Product name */
                name: string;
                /** Product is available on those regions */
                regions: cloud.capabilities.AvailabilityRegion[];
            }
            /** Details about a region */
            interface AvailabilityRegion {
                /** Region continent code */
                continentCode: cloud.RegionContinentEnum;
                /** Location of the datacenter where the region is */
                datacenter: string;
                /** Region is enabled */
                enabled: boolean;
                /** Region name */
                name: string;
            }
        }
        namespace common {
            /** Voucher validity range */
            interface VoucherValidity {
                /** Valid from */
                from ? : string;
                /** Valid to */
                to ? : string;
            }
        }
        namespace containerRegistry {
            namespace registry {
                /** Region of the registry */
                enum RegionEnum {
                    "GRA7"
                }
                /** Managed docker registry */
                interface Registry {
                    /** Registry creation date */
                    createdAt: string;
                    /** Registry ID */
                    id: string;
                    /** Registry name */
                    name: string;
                    /** Project ID of your registry */
                    projectID: string;
                    /** Region of the registry */
                    region: cloud.containerRegistry.registry.RegionEnum;
                    /** Registry status */
                    status: cloud.containerRegistry.registry.StatusEnum;
                    /** Registry last update date */
                    updatedAt: string;
                    /** Access url of the registry */
                    url: string;
                    /** Version of your registry */
                    version: string;
                }
                /** Status of the registry */
                enum StatusEnum {
                    "ERROR",
                    "READY",
                    "DELETED",
                    "SUSPENDED",
                    "INSTALLING",
                    "UPDATING",
                    "RESTORING",
                    "SUSPENDING",
                    "DELETING"
                }
            }
            namespace user {
                /** Docker registry user */
                interface User {
                    /** User email */
                    email: string;
                    /** User ID */
                    id: string;
                    /** User password */
                    password ? : string;
                    /** User name */
                    user: string;
                }
            } /** The container registry capability for a single region */
            interface Capability {
                /** Available plans in the region */
                plans: cloud.containerRegistry.Plan[];
                /** The region name */
                regionName: string;
            }
            /** Features list, enabled or not */
            interface Features {
                /** Vulnerability scanning */
                vulnerability: boolean;
            }
            /** Limitation of a docker registry */
            interface Limits {
                /** Docker image storage limits in bytes */
                imageStorage: number;
                /** Parallel requests on Docker image API (/v2 Docker registry API) */
                parallelRequest: number;
            }
            /** Plan of the registry */
            interface Plan {
                /** Plan code from catalog */
                code: string;
                /** Plan creation date */
                createdAt: string;
                /** Features of the plan */
                features: cloud.containerRegistry.Features;
                /** Plan ID */
                id: string;
                /** Plan name */
                name: string;
                /** Container registry limits */
                registryLimits: cloud.containerRegistry.Limits;
                /** Plan last update date */
                updatedAt: string;
            }
            /** Missing description */
            interface PlanUpdate {
                /** Plan ID to apply to the registry */
                planID: string;
            }
            /** Managed docker registry */
            interface Registry {
                /** Registry creation date */
                createdAt: string;
                /** Registry ID */
                id: string;
                /** Registry name */
                name: string;
                /** Project ID of your registry */
                projectID: string;
                /** Region of the registry. */
                region: string;
                /** Current size of the registry (bytes) */
                size: number;
                /** Registry status */
                status: cloud.containerRegistry.StatusEnum;
                /** Registry last update date */
                updatedAt: string;
                /** Access url of the registry */
                url: string;
                /** Version of your registry */
                version: string;
            }
            /** Status of the registry */
            enum StatusEnum {
                "DELETED",
                "DELETING",
                "ERROR",
                "INSTALLING",
                "READY",
                "RESTORING",
                "SUSPENDED",
                "SUSPENDING",
                "UPDATING"
            }
            /** Docker registry user */
            interface User {
                /** User email */
                email: string;
                /** User ID */
                id: string;
                /** User password */
                password ? : string;
                /** User name */
                user: string;
            }
        }
        namespace flavor {
            /** Flavor capability */
            interface Capability {
                /** Is the capability enabled */
                enabled: boolean;
                /** Name of the capability */
                name: cloud.flavor.CapabilityNameEnum;
            }
            /** Enum values for flavor capabilities names */
            enum CapabilityNameEnum {
                "failoverip",
                "resize",
                "snapshot",
                "volume"
            }
            /** Flavor */
            interface Flavor {
                /** Available in stock */
                available: boolean;
                /** Capabilities of the flavor */
                capabilities: cloud.flavor.Capability[];
                /** Number of disks */
                disk: number;
                /** Flavor id */
                id: string;
                /** Max capacity of inbound traffic in Mbit/s */
                inboundBandwidth ? : number;
                /** Flavor name */
                name: string;
                /** OS to install on */
                osType: string;
                /** Max capacity of outbound traffic in Mbit/s */
                outboundBandwidth ? : number;
                /** Plan codes to order instances */
                planCodes: cloud.flavor.FlavorPlanCodes;
                /** Number instance you can spawn with your actual quota */
                quota: number;
                /** Ram quantity (Gio) */
                ram: number;
                /** Flavor region */
                region: string;
                /** Flavor type */
                type: string;
                /** Number of VCPUs */
                vcpus: number;
            }
            /** FlavorPlanCodes */
            interface FlavorPlanCodes {
                /** Plan code to order hourly instance */
                hourly ? : string;
                /** Plan code to order monthly instance */
                monthly ? : string;
            }
        }
        namespace image {
            /** Image */
            interface Image {
                /** Image creation date */
                creationDate: string;
                /** Image usable only for this type of flavor if not null */
                flavorType ? : string;
                /** Image id */
                id: string;
                /** Minimum disks required to use image */
                minDisk: number;
                /** Minimum RAM required to use image */
                minRam: number;
                /** Image name */
                name: string;
                /** Order plan code */
                planCode ? : string;
                /** Image region */
                region: string;
                /** Image size (in GiB) */
                size: double;
                /** Image status */
                status: string;
                /** Tags about the image */
                tags ? : string[];
                /** Image type */
                type: string;
                /** User to connect with */
                user: string;
                /** Image visibility */
                visibility: string;
            }
            /** OSTypeEnum */
            enum OSTypeEnum {
                "baremetal-linux",
                "bsd",
                "linux",
                "windows"
            }
        }
        namespace instance {
            namespace CreateInput {
                namespace Network {
                    namespace Private {
                        namespace GatewayCreate {
                            /** Gateway model */
                            enum ModelEnum {
                                "l",
                                "m",
                                "s"
                            }
                        }
                        namespace NetworkCreate {
                            /** New subnet information */
                            interface Subnet {
                                /** Subnet range in CIDR notation */
                                cidr: ipv4Block;
                                /** enableDhcp */
                                enableDhcp: boolean;
                                /** IP version */
                                ipVersion: number;
                            }
                        } /** Existing floating IP */
                        interface FloatingIp {
                            /** Floating IP ID */
                            id: string;
                        }
                        /** Information to create a new floating IP */
                        interface FloatingIpCreate {
                            /** Floating IP description */
                            description: string;
                        }
                        /** Existing gateway */
                        interface Gateway {
                            /** Gateway ID */
                            id: string;
                        }
                        /** Information to create a new gateway */
                        interface GatewayCreate {
                            /** Gateway model */
                            model: cloud.instance.CreateInput.Network.Private.GatewayCreate.ModelEnum;
                            /** Gateway name */
                            name: string;
                        }
                        /** Existing private network */
                        interface Network {
                            /** Network ID */
                            id: string;
                            /** Existing Subnet ID */
                            subnetId: string;
                        }
                        /** Information to create a new private network */
                        interface NetworkCreate {
                            /** Network name */
                            name: string;
                            /** New subnet information */
                            subnet: cloud.instance.CreateInput.Network.Private.NetworkCreate.Subnet;
                            /** Network vlan ID */
                            vlanId ? : number;
                        }
                    } /** Private network information */
                    interface Private {
                        /** Existing floating IP */
                        floatingIp ? : cloud.instance.CreateInput.Network.Private.FloatingIp;
                        /** Information to create a new floating IP */
                        floatingIpCreate ? : cloud.instance.CreateInput.Network.Private.FloatingIpCreate;
                        /** Existing gateway */
                        gateway ? : cloud.instance.CreateInput.Network.Private.Gateway;
                        /** Information to create a new gateway */
                        gatewayCreate ? : cloud.instance.CreateInput.Network.Private.GatewayCreate;
                        /** Instance IP in the private network */
                        ip ? : ipv4;
                        /** Existing private network */
                        network ? : cloud.instance.CreateInput.Network.Private.Network;
                        /** Information to create a new private network */
                        networkCreate ? : cloud.instance.CreateInput.Network.Private.NetworkCreate;
                    }
                } /** Create an autobackup workflow after instance start up */
                interface Autobackup {
                    /** Unix Cron pattern (eg: '0 0 * * *') */
                    cron: string;
                    /** Number of backup to keep */
                    rotation: number;
                }
                /** Billing period */
                enum BillingPeriodEnum {
                    "hourly",
                    "monthly"
                }
                /** Boot the instance from an image or a volume */
                interface BootFrom {
                    /** Instance image id */
                    imageId ? : string;
                    /** Specify a volume id to boot from it */
                    volumeId ? : string;
                }
                /** Flavor information */
                interface Flavor {
                    /** Instance flavor id */
                    id: string;
                }
                /** Start instance in group */
                interface Group {
                    /** Group id */
                    id: string;
                }
                /** Networks information */
                interface Network {
                    /** Private network information */
                    private ? : cloud.instance.CreateInput.Network.Private;
                    /** Set the new instance as public */
                    public: boolean;
                }
                /** Existing SSH Keypair */
                interface SshKey {
                    /** SSH Keypair name */
                    name: string;
                }
                /** Information to create a new SSH Keypair */
                interface SshKeyCreate {
                    /** SSH key name */
                    name: string;
                    /** SSH public key */
                    publicKey: string;
                }
            } /** Access */
            interface Access {
                /** Login */
                login: string;
                /** Password */
                password: string;
                /** Application access type */
                type: string;
                /** Url */
                url: string;
            }
            /** ApplicationAccess */
            interface ApplicationAccess {
                /** List of credentials */
                accesses: cloud.instance.Access[];
                /** Application status */
                status: cloud.instance.ApplicationAccessStateEnum;
            }
            /** ApplicationAccessStateEnum */
            enum ApplicationAccessStateEnum {
                "installing",
                "ok"
            }
            /** Parameters to associate an existing floating IP to an instance */
            interface AssociateFloatingIp {
                /** Floating IP ID */
                floatingIpId: string;
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private instance IP to associate the floating IP with */
                ip: string;
            }
            /** Autobackup params at instance creation */
            interface AutoBackup {
                /** Unix Cron pattern (eg: '0 0 * * *') */
                cron: string;
                /** Number of backup to keep */
                rotation: number;
            }
            /** Parameters to create a floating IP for an instance */
            interface CreateFloatingIp {
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private instance IP to associate the floating IP with */
                ip: string;
            }
            /** Instance creation input */
            interface CreateInput {
                /** Create an autobackup workflow after instance start up */
                autobackup ? : cloud.instance.CreateInput.Autobackup;
                /** Billing period */
                billingPeriod: cloud.instance.CreateInput.BillingPeriodEnum;
                /** Boot the instance from an image or a volume */
                bootFrom: cloud.instance.CreateInput.BootFrom;
                /** Create multiple instances */
                bulk: number;
                /** Flavor information */
                flavor: cloud.instance.CreateInput.Flavor;
                /** Start instance in group */
                group ? : cloud.instance.CreateInput.Group;
                /** Instance name */
                name: string;
                /** Networks information */
                network: cloud.instance.CreateInput.Network;
                /** Existing SSH Keypair */
                sshKey ? : cloud.instance.CreateInput.SshKey;
                /** Information to create a new SSH Keypair */
                sshKeyCreate ? : cloud.instance.CreateInput.SshKeyCreate;
                /** Configuration information or scripts to use upon launch */
                userData ? : string;
            }
            /** Instance */
            interface Instance {
                /** Instance creation date */
                created: string;
                /** Instance outgoing network traffic for the current month (in bytes) */
                currentMonthOutgoingTraffic ? : number;
                /** Instance flavor id */
                flavorId: string;
                /** Instance id */
                id: string;
                /** Instance image id */
                imageId: string;
                /** Instance IP addresses */
                ipAddresses: cloud.instance.IpAddress[];
                /** Instance monthly billing status */
                monthlyBilling ? : cloud.instance.MonthlyBilling;
                /** Instance name */
                name: string;
                /** Ids of pending public cloud operations */
                operationIds: string[];
                /** Order plan code */
                planCode ? : string;
                /** Instance id */
                region: string;
                /** Instance ssh key id */
                sshKeyId ? : string;
                /** Instance status */
                status: cloud.instance.InstanceStatusEnum;
            }
            /** InstanceDetail */
            interface InstanceDetail {
                /** Instance creation date */
                created: string;
                /** Instance outgoing network traffic for the current month (in bytes) */
                currentMonthOutgoingTraffic ? : number;
                /** Instance flavor */
                flavor: cloud.flavor.Flavor;
                /** Instance id */
                id: string;
                /** Instance image */
                image: cloud.image.Image;
                /** Instance IP addresses */
                ipAddresses: cloud.instance.IpAddress[];
                /** Instance monthly billing status */
                monthlyBilling ? : cloud.instance.MonthlyBilling;
                /** Instance name */
                name: string;
                /** Ids of pending public cloud operations */
                operationIds: string[];
                /** Order plan code */
                planCode ? : string;
                /** Instance id */
                region: string;
                /** Rescue password if instance is in RESCUE status */
                rescuePassword ? : string;
                /** Instance SSH key */
                sshKey ? : cloud.sshkey.SshKeyDetail;
                /** Instance status */
                status: cloud.instance.InstanceStatusEnum;
            }
            /** InstanceMetrics */
            interface InstanceMetrics {
                /** unit */
                unit: string;
                /** values */
                values: cloud.instance.InstanceMetricsValue[];
            }
            /** InstanceMetricsValue */
            interface InstanceMetricsValue {
                /** timestamp */
                timestamp: number;
                /** value */
                value: double;
            }
            /** InstanceStatusEnum */
            enum InstanceStatusEnum {
                "ACTIVE",
                "BUILD",
                "BUILDING",
                "DELETED",
                "DELETING",
                "ERROR",
                "HARD_REBOOT",
                "MIGRATING",
                "PASSWORD",
                "PAUSED",
                "REBOOT",
                "REBUILD",
                "RESCUE",
                "RESCUED",
                "RESCUING",
                "RESIZE",
                "RESIZED",
                "RESUMING",
                "REVERT_RESIZE",
                "SHELVED",
                "SHELVED_OFFLOADED",
                "SHELVING",
                "SHUTOFF",
                "SNAPSHOTTING",
                "SOFT_DELETED",
                "STOPPED",
                "SUSPENDED",
                "UNKNOWN",
                "UNRESCUING",
                "UNSHELVING",
                "VERIFY_RESIZE"
            }
            /** Instance */
            interface InstanceSummary {
                /** Instance id */
                id: string;
                /** Instance name */
                name: string;
            }
            /** InstanceVnc */
            interface InstanceVnc {
                /** VNC type */
                type: string;
                /** VNC url */
                url: string;
            }
            /** IpAddress */
            interface IpAddress {
                /** Gateway IP */
                gatewayIp ? : string;
                /** Instance IP address */
                ip: string;
                /** Network ID */
                networkId: string;
                /** Instance IP address type */
                type: string;
                /** IP version */
                version: number;
            }
            /** MetricsPeriod */
            enum MetricsPeriodEnum {
                "lastday",
                "lastmonth",
                "lastweek",
                "lastyear",
                "today"
            }
            /** MetricsType */
            enum MetricsTypeEnum {
                "cpu:max",
                "cpu:used",
                "mem:max",
                "mem:used",
                "net:rx",
                "net:tx"
            }
            /** MonthlyBilling */
            interface MonthlyBilling {
                /** Monthly billing activated since */
                since: string;
                /** Monthly billing status */
                status: cloud.instance.MonthlyBillingStatusEnum;
            }
            /** MonthlyBillingStatusEnum */
            enum MonthlyBillingStatusEnum {
                "activationPending",
                "ok"
            }
            /** Instance with region to set as monthly billing */
            interface MonthlyInstanceBulkParams {
                /** Instance id */
                instanceId: string;
                /** Region name */
                region: string;
            }
            /** NetworkBulkParams */
            interface NetworkBulkParams {
                /** Private or public network Id */
                networkId: string;
            }
            /** NetworkParams */
            interface NetworkParams {
                /** Static ip (Can only be defined for private networks) */
                ip ? : string;
                /** Private or public network Id */
                networkId: string;
            }
            /** RebootTypeEnum */
            enum RebootTypeEnum {
                "hard",
                "soft"
            }
            /** RescueAdminPassword */
            interface RescueAdminPassword {
                /** Admin password to connect to your rescue server with */
                adminPassword ? : string;
            }
        }
        namespace instanceInterface {
            /** FixedIp */
            interface FixedIp {
                /** Ip */
                ip: string;
                /** Subnetwork Id */
                subnetId: string;
            }
            /** Interface */
            interface Interface {
                /** List of ips of the interface */
                fixedIps: cloud.instanceInterface.FixedIp[];
                /** Interface unique identifier */
                id: string;
                /** Mac address */
                macAddress: string;
                /** Network id */
                networkId: string;
                /** Openstack state */
                state: string;
                /** Network type */
                type: string;
            }
        }
        namespace instancegroup {
            /** InstanceGroup */
            interface InstanceGroup {
                /** Instance group id */
                id: string;
                /** Instances ids */
                instance_ids: string[];
                /** Instance group name */
                name: string;
                /** region */
                region: string;
                /** Instance group type */
                type: cloud.instancegroup.InstanceGroupTypeEnum;
            }
            /** InstanceGroupTypeEnum */
            enum InstanceGroupTypeEnum {
                "affinity",
                "anti-affinity"
            }
        }
        namespace ip {
            /** CloudIp */
            interface CloudIp {
                /** Ip id */
                id: string;
                /** Ip */
                ip ? : string;
                /** Ip status */
                status: cloud.ip.IpStatusEnum;
                /** Ip type */
                type: string;
            }
            /** FailoverIp */
            interface FailoverIp {
                /** IP block */
                block ? : string;
                /** Ip continent */
                continentCode ? : string;
                /** Ip location */
                geoloc ? : string;
                /** Ip id */
                id: string;
                /** Ip */
                ip ? : string;
                /** Current operation progress in percent */
                progress: number;
                /** Instance where ip is routed to */
                routedTo: string;
                /** Ip status */
                status: cloud.ip.IpStatusEnum;
                /** IP sub type */
                subType: cloud.ip.IpSubTypeEnum;
            }
            /** IpStatusEnum */
            enum IpStatusEnum {
                "ok",
                "operationPending"
            }
            /** IpSubTypeEnum */
            enum IpSubTypeEnum {
                "cloud",
                "ovh"
            }
        }
        namespace keymanager {
            /** Key-manager certificate secret container */
            interface Certificate {
                /** ID of the certificate */
                id: string;
                /** Name of the certificate */
                name: string;
                /** Certificate region */
                region: string;
                /** List of secrets in certificate container */
                secrets: cloud.keymanager.SecretRef[];
            }
            /** Input to create a certificate */
            interface CertificateCreate {
                /** Content of the certificate */
                certificate: string;
                /** Content of the intermediates certificates if any */
                intermediates: string;
                /** Name of the certificate */
                name: string;
                /** Private key */
                privateKey: string;
                /** Private key passphrase if any */
                privateKeyPassphrase: string;
            }
            /** secret */
            interface Secret {
                /** ID of the secret */
                id: string;
                /** Name of the secret */
                name: string;
                /** Secret region */
                region: string;
            }
            /** Secret reference */
            interface SecretRef {
                /** ID of the secret */
                id: string;
                /** Name of the secret */
                name: string;
            }
        }
        namespace kube {
            /** Managed Kubernetes Audit Logs */
            interface AuditLogs {
                /** Temporary url expiration date */
                expirationDate: string;
                /** Temporary logs URL */
                url: string;
            }
            /** Managed Kubernetes cluster description */
            interface Cluster {
                /** True if control-plane is up to date */
                controlPlaneIsUpToDate: boolean;
                /** Cluster creation date */
                createdAt: string;
                /** Kubernetes cluster customization */
                customization ? : cloud.ProjectKubeCustomization;
                /** Cluster ID */
                id: string;
                /** True if all nodes and control-plane are up to date */
                isUpToDate: boolean;
                /** Selected mode for kube-proxy */
                kubeProxyMode: cloud.kube.KubeProxyModeEnum;
                /** Cluster name */
                name: string;
                /** Kubernetes versions available for upgrade */
                nextUpgradeVersions ? : string[];
                /** Cluster nodes URL */
                nodesUrl: string;
                /** The private network configuration. This field is optional. */
                privateNetworkConfiguration ? : cloud.kube.PrivateNetworkConfiguration;
                /** OpenStack private network (or vrack) ID to bind to the cluster, this property is optional. This property cannot be updated afterwards, except through a cluster reset. */
                privateNetworkId ? : string;
                /** Cluster region */
                region: cloud.kube.RegionEnum;
                /** Cluster status */
                status: cloud.kube.ClusterStatusEnum;
                /** Cluster update policy */
                updatePolicy: string;
                /** Cluster last update date */
                updatedAt: string;
                /** Management URL of your cluster */
                url: string;
                /** Kubernetes version of your cluster */
                version: string;
            }
            /** Enum values for Status */
            enum ClusterStatus {
                "INSTALLING",
                "UPDATING",
                "RESETTING",
                "SUSPENDING",
                "REOPENING",
                "DELETING",
                "SUSPENDED",
                "ERROR",
                "USER_ERROR",
                "USER_QUOTA_ERROR",
                "READY"
            }
            /** Enum values for Status */
            enum ClusterStatusEnum {
                "DELETED",
                "DELETING",
                "ERROR",
                "INSTALLING",
                "MAINTENANCE",
                "READY",
                "REDEPLOYING",
                "REOPENING",
                "RESETTING",
                "SUSPENDED",
                "SUSPENDING",
                "UPDATING",
                "USER_ERROR",
                "USER_QUOTA_ERROR",
                "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
            }
            /** Etcd usage and quota for a given cluster */
            interface EtcdUsage {
                /** Maximum allowed size of etcd data for the cluster (bytes) */
                quota: number;
                /** Size of etcd data used by the cluster (bytes) */
                usage: number;
            }
            /** a flavor kind */
            interface Flavor {
                /** Flavor family */
                category: cloud.kube.FlavorCategoryEnum;
                /** Number of GPUs */
                gpus: number;
                /** Flavor name */
                name: string;
                /** Ram quantity (GB) */
                ram: number;
                /** Flavor state */
                state: cloud.kube.FlavorStateEnum;
                /** Number of VCPUs */
                vCPUs: number;
            }
            /** Enum values for category */
            enum FlavorCategory {
                "c",
                "g",
                "t",
                "b",
                "r"
            }
            /** Enum values for category */
            enum FlavorCategoryEnum {
                "b",
                "c",
                "d",
                "g",
                "i",
                "r",
                "t"
            }
            /** Enum values for State */
            enum FlavorState {
                "available",
                "unavailable"
            }
            /** Enum values for State */
            enum FlavorStateEnum {
                "available",
                "unavailable"
            }
            /** Enum values for scheduler parameter of cluster kubeProxy custom ipvs config */
            enum KubeProxyIpvsSchedulerEnum {
                "dh",
                "lc",
                "nq",
                "rr",
                "sed",
                "sh"
            }
            /** Enum values for cluster kubeProxyMode */
            enum KubeProxyModeEnum {
                "iptables",
                "ipvs"
            }
            /** Kubeconfig description */
            interface Kubeconfig {
                /** kubeconfig file */
                content: string;
            }
            /** Node installed on your cluster */
            interface Node {
                /** Creation date */
                createdAt: string;
                /** Node deployment date */
                deployedAt ? : string;
                /** Flavor name */
                flavor: string;
                /** Node ID */
                id: string;
                /** Public Cloud instance id */
                instanceId ? : string;
                /** True if the node is up to date */
                isUpToDate: boolean;
                /** Node name */
                name: string;
                /** NodePool parent id */
                nodePoolId: string;
                /** Project id */
                projectId: string;
                /** Status */
                status: cloud.kube.NodeStatusEnum;
                /** Node last update date */
                updatedAt: string;
                /** Node version */
                version: string;
            }
            /** NodePool created on your cluster to manage your nodes */
            interface NodePool {
                /** Enable anti affinity groups for nodes in the pool */
                antiAffinity: boolean;
                /** Enable auto-scaling for the pool */
                autoscale: boolean;
                /** Autoscaling customization parameters */
                autoscaling: cloud.kube.NodePoolAutoscaling;
                /** Number of nodes which are actually ready in the pool */
                availableNodes: number;
                /** Creation date */
                createdAt: string;
                /** Number of nodes present in the pool */
                currentNodes: number;
                /** Number of nodes you desire in the pool */
                desiredNodes: number;
                /** Flavor name */
                flavor: string;
                /** NodePool ID */
                id: string;
                /** Number of nodes you desire in the pool */
                maxNodes: number;
                /** Number of nodes you desire in the pool */
                minNodes: number;
                /** Enable monthly billing on all nodes in the pool */
                monthlyBilled: boolean;
                /** NodePool resource name */
                name: string;
                /** Project id */
                projectId: string;
                /** Status describing the state between number of nodes wanted and available ones */
                sizeStatus: cloud.kube.NodePoolSizeStatusEnum;
                /** Current status */
                status: cloud.kube.NodePoolStatusEnum;
                /** Template of nodes metadata and spec to create in the pool */
                template: cloud.kube.NodePoolTemplate;
                /** Number of nodes with latest version installed in the pool */
                upToDateNodes: number;
                /** Last update date */
                updatedAt: string;
            }
            /** Autoscaling customization parameters */
            interface NodePoolAutoscaling {
                /** How long a node should be unneeded before it is eligible for scale down */
                scaleDownUnneededTimeSeconds: number;
                /** How long an unready node should be unneeded before it is eligible for scale down */
                scaleDownUnreadyTimeSeconds: number;
                /** Sum of cpu or memory of all pods running on the node divided by node's corresponding allocatable resource, below which a node can be considered for scale down */
                scaleDownUtilizationThreshold: double;
            }
            /** Enum values for NodePool size Status */
            enum NodePoolSizeStatusEnum {
                "CAPACITY_OK",
                "OVER_CAPACITY",
                "UNDER_CAPACITY"
            }
            /** Enum values for NodePool Status */
            enum NodePoolStatusEnum {
                "DELETED",
                "DELETING",
                "DOWNSCALING",
                "ERROR",
                "INSTALLING",
                "MAINTENANCE",
                "READY",
                "REDEPLOYING",
                "REOPENING",
                "RESETTING",
                "SUSPENDED",
                "SUSPENDING",
                "UPDATING",
                "UPSCALING",
                "USER_ERROR",
                "USER_NODE_NOT_FOUND_ERROR",
                "USER_NODE_SUSPENDED_SERVICE",
                "USER_QUOTA_ERROR",
                "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
            }
            /** Managed Kubernetes nodepool template */
            interface NodePoolTemplate {
                /** Metadata of each nodes in the pool */
                metadata: cloud.kube.NodePoolTemplateMetadata;
                /** Spec of each nodes in the pool */
                spec: cloud.kube.NodePoolTemplateSpec;
            }
            /** Metadata of each nodes in the pool */
            interface NodePoolTemplateMetadata {
                /** Annotations to apply to each nodes */
                annotations: Record < string,
                string > ;
                /** Finalizers to apply to each nodes */
                finalizers: string[];
                /** Labels to apply to each nodes */
                labels: Record < string,
                string > ;
            }
            /** Spec of each nodes in the pool */
            interface NodePoolTemplateSpec {
                /** Taints to apply to each nodes */
                taints: cloud.kube.Taint[];
                /** If true, set nodes as un-schedulable */
                unschedulable: boolean;
            }
            /** Enum values for Status */
            enum NodeStatus {
                "INSTALLING",
                "UPDATING",
                "RESETTING",
                "SUSPENDING",
                "REOPENING",
                "DELETING",
                "SUSPENDED",
                "ERROR",
                "USER_ERROR",
                "USER_QUOTA_ERROR",
                "USER_NODE_NOT_FOUND_ERROR",
                "USER_NODE_SUSPENDED_SERVICE",
                "READY"
            }
            /** Enum values for Status */
            enum NodeStatusEnum {
                "DELETED",
                "DELETING",
                "ERROR",
                "FLAVOR_OUT_OF_STOCK_ERROR",
                "INSTALLING",
                "MAINTENANCE",
                "READY",
                "REDEPLOYING",
                "REOPENING",
                "RESETTING",
                "SUSPENDED",
                "SUSPENDING",
                "UPDATING",
                "USER_ERROR",
                "USER_NODE_NOT_FOUND_ERROR",
                "USER_NODE_SUSPENDED_SERVICE",
                "USER_QUOTA_ERROR",
                "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
            }
            /** Managed Kubernetes oidc integration */
            interface OpenIdConnect {
                /** Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. */
                caContent ? : string;
                /** Client ID */
                clientId: string;
                /** JWT claim to use as the user's group. If the claim is present it must be an array of strings. */
                groupsClaim ? : string[];
                /** Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. */
                groupsPrefix ? : string;
                /** Issuer URL */
                issuerUrl: string;
                /** key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. */
                requiredClaim ? : string[];
                /** The signing algorithms accepted. Default is "RS256". */
                signingAlgorithms ? : cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
                /** JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. */
                usernameClaim ? : string;
                /** Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. */
                usernamePrefix ? : string;
            }
            /** Enum values for OpenIdConnect signing algorithms */
            enum OpenIdConnectSigningAlgorithmsEnum {
                "ES256",
                "ES384",
                "ES512",
                "PS256",
                "PS384",
                "PS512",
                "RS256",
                "RS384",
                "RS512"
            }
            /** Managed Kubernetes cluster private networking configuration */
            interface PrivateNetworkConfiguration {
                /** If defined, all egress traffic will be routed towards this IP address, which should belong to the private network. Empty string means disabled. */
                defaultVrackGateway: string;
                /** Defines whether routing should default to using the nodes' private interface, instead of their public interface. Default is false. */
                privateNetworkRoutingAsDefault ? : boolean;
            }
            /** Enum values for available regions */
            enum Region {
                "GRA5",
                "GRA7",
                "BHS5"
            }
            /** Enum values for regions where cluster creation is possible, region where cluster are deployed is cloud.kube.RegionEnum */
            enum RegionCapabilitiesEnum {
                "BHS5",
                "DE1",
                "GRA5",
                "GRA7",
                "GRA9",
                "SBG5",
                "SGP1",
                "SYD1",
                "UK1",
                "US-EAST-VA-1",
                "US-WEST-OR-1",
                "WAW1"
            }
            /** Enum values for regions where cluster are deployed and flavor related location. Available region for cluster creation is cloud.kube.RegionCapabilitiesEnum */
            enum RegionEnum {
                "BHS5",
                "DE1",
                "GRA5",
                "GRA7",
                "GRA9",
                "SBG5",
                "SGP1",
                "SYD1",
                "UK1",
                "US-EAST-VA-1",
                "US-WEST-OR-1",
                "WAW1"
            }
            /** Enum values for worker nodes reset policy */
            enum ResetWorkerNodesPolicy {
                "reinstall",
                "delete"
            }
            /** Enum values for worker nodes reset policy */
            enum ResetWorkerNodesPolicyEnum {
                "delete",
                "reinstall"
            }
            /** A generic object for response message */
            interface ResponseMessage {
                /** The response message. */
                message: string;
            }
            /** Kubernetes taint object */
            interface Taint {
                /** The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute */
                effect: cloud.kube.TaintEffectEnum;
                /** The taint key to be applied to a node */
                key: string;
                /** The taint value corresponding to the taint key */
                value: string;
            }
            /** Enum values for taint effects */
            enum TaintEffectEnum {
                "NoExecute",
                "NoSchedule",
                "PreferNoSchedule"
            }
            /** Enum values for UpdatePolicy */
            enum UpdatePolicy {
                "ALWAYS_UPDATE",
                "MINIMAL_DOWNTIME",
                "NEVER_UPDATE"
            }
            /** Enum values for UpdatePolicy */
            enum UpdatePolicyEnum {
                "ALWAYS_UPDATE",
                "MINIMAL_DOWNTIME",
                "NEVER_UPDATE"
            }
            /** Enum values for UpdateStrategy */
            enum UpdateStrategy {
                "LATEST_PATCH",
                "NEXT_MINOR"
            }
            /** Enum values for UpdateStrategy */
            enum UpdateStrategyEnum {
                "LATEST_PATCH",
                "NEXT_MINOR"
            }
            /** List of available versions for upgrade */
            enum UpgradeVersion {
                "1.12",
                "1.13",
                "1.14",
                "1.15",
                "1.16"
            }
            /** List of available versions for installation */
            enum Version {
                "1.13",
                "1.14",
                "1.15"
            }
            /** List of available versions for installation */
            enum VersionEnum {
                "1.24",
                "1.25",
                "1.26"
            }
        }
        namespace loadbalancing {
            namespace loadbalancer {
                /** Create a listener on loadbalancer creation */
                interface ListenerCreate {
                    /** Name of the listener */
                    name: string;
                    /** Listener pools */
                    pools: cloud.loadbalancing.loadbalancer.PoolCreate[];
                    /** Listener port */
                    port: number;
                    /** Protocol for the listener */
                    protocol: cloud.loadbalancing.ListenerProtocolEnum;
                    /** Secret ID to get certificate for SSL listener creation */
                    secretId: string;
                }
                /** Create a member on loadbalancer creation */
                interface MemberCreate {
                    /** IP address of the resource */
                    address: string;
                    /** Name of the member */
                    name: string;
                    /** Protocol port number for the resource */
                    protocolPort: number;
                    /** Weight of a member determines the portion of requests or connections it services compared to the other members of the pool. Between 1 and 256. */
                    weight: number;
                }
                /** Network information to create a loadbalancer */
                interface NetworkInformationCreate {
                    /** Create a new gateway for the given network */
                    gateway: cloud.network.CreateGatewaySummary;
                    /** Private network ID to create the loadbalancer */
                    networkId: string;
                    /** Private subnet ID to create the loadbalancer */
                    subnetId: string;
                }
                /** Create a pool on loadbalancer creation */
                interface PoolCreate {
                    /** Pool algorithm to split traffic between members */
                    algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                    /** Is pool default pool for the listener */
                    default: boolean;
                    /** Pool health monitor */
                    healthMonitor ? : cloud.loadbalancing.HealthMonitorCreate;
                    /** Pool members */
                    members: cloud.loadbalancing.loadbalancer.MemberCreate[];
                    /** Name of the pool */
                    name: string;
                    /** Protocol for the pool */
                    protocol: cloud.loadbalancing.PoolProtocolEnum;
                    /** Pool session persistence */
                    sessionPersistence: cloud.loadbalancing.PoolSessionPersistence;
                }
            }
            namespace pool {
                /** Member */
                interface Member {
                    /** IP address of the resource */
                    address: string;
                    /** ID of the resource */
                    id: string;
                    /** Name of the resource */
                    name: string;
                    /** Operating status of the resource */
                    operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                    /** Protocol port number for the resource */
                    protocolPort: number;
                    /** Provisioning status of the resource */
                    provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                    /** Weight of a member determines the portion of requests or connections it services compared to the other members of the pool */
                    weight: number;
                }
                /** Parameters to update a pool member */
                interface MemberUpdate {
                    /** Name of the resource */
                    name ? : string;
                    /** Weight of a member determines the portion of requests or connections it services compared to the other members of the pool */
                    weight ? : number;
                }
            } /** Parameters to associate an existing floating IP to a loadbalancer */
            interface AssociateFloatingIp {
                /** Floating IP ID */
                floatingIpId: string;
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private loadbalancer IP to associate the floating IP with */
                ip: string;
            }
            /** Parameters to create a floating IP for a loadbalancer */
            interface CreateFloatingIp {
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private loadbalancer IP to associate the floating IP with */
                ip: string;
            }
            /** Input to create a loadbalancer listener */
            interface CreateListener {
                /** The ID of the secret containing the certificate */
                certificateId: string;
                /** The ID of the default pool */
                defaultPoolId: string;
                /** The ID of the loadbalancer */
                loadbalancerId: string;
                /** The name of the listener */
                name: string;
                /** Port to listen on */
                port: number;
                /** Protocol of the listener */
                protocol: cloud.loadbalancing.ListenerProtocolEnum;
            }
            /** Flavor */
            interface Flavor {
                /** Flavor id */
                id: string;
                /** Flavor name */
                name: string;
            }
            /** HealthMonitor */
            interface HealthMonitor {
                /** Monitor HTTP configuration */
                httpConfiguration ? : cloud.loadbalancing.HealthMonitorHTTPConfiguration;
                /** The ID of the pool */
                id: string;
                /** Number of successful checks before changing the operating status of the member to ONLINE */
                maxRetries: number;
                /** Number of allowed check failures before changing the operating status of the member to ERROR */
                maxRetriesDown: number;
                /** Type of the monitor */
                monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum;
                /** The name of the resource */
                name: string;
                /** The operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Duration between sending probes to members, in format RFC3339 */
                periodicity: duration;
                /** The ID of the pool */
                poolId: string;
                /** The provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the periodicity value */
                timeout: number;
            }
            /** Create a health monitor on loadbalancer creation */
            interface HealthMonitorCreate {
                /** Monitor HTTP configuration */
                httpConfiguration ? : cloud.loadbalancing.HealthMonitorHTTPConfiguration;
                /** Number of successful checks before changing the operating status of the member to ONLINE */
                maxRetries: number;
                /** Number of allowed check failures before changing the operating status of the member to ERROR */
                maxRetriesDown: number;
                /** Type of the monitor */
                monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum;
                /** The name of the resource */
                name: string;
                /** The operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Duration between sending probes to members, in format RFC3339 */
                periodicity: duration;
                /** The provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the periodicity value */
                timeout: number;
            }
            /** HTTP configuration for loadbalancer health monitor */
            interface HealthMonitorHTTPConfiguration {
                /** Domain name, which be injected into the HTTP Host Header to the backend server for HTTP health check */
                domainName: string;
                /** List of HTTP status codes expected in response from the member to declare it healthy */
                expectedCodes: number[];
                /** HTTP method that the health monitor uses for requests */
                httpMethod: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPMethodEnum;
                /** HTTP version that the health monitor uses for requests */
                httpVersion: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPVersionEnum;
                /** HTTP URL path of the request sent by the monitor to test the health of a backend member */
                urlPath: string;
            }
            /** L7 policy */
            interface L7Policy {
                /** The L7 policy action */
                action: cloud.loadbalancing.L7PolicyActionEnum;
                /** A human-readable description for the resource */
                description: string;
                /** id */
                id: string;
                /** The ID of the listener. */
                listenerId: string;
                /** Human-readable name of the resource */
                name: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** The position of this policy on the listener. Positions start at 1 */
                position: number;
                /** provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix" */
                redirectHttpCode ? : number;
                /** Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool" */
                redirectPoolId ? : string;
                /** Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix" */
                redirectPrefix ? : string;
                /** Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url" */
                redirectUrl ? : string;
            }
            /** Loadbalancer L7 policy */
            enum L7PolicyActionEnum {
                "redirectPrefix",
                "redirectToPool",
                "redirectToURL",
                "reject"
            }
            /** L7 policy */
            interface L7PolicyUpdate {
                /** The L7 policy action */
                action: cloud.loadbalancing.L7PolicyActionEnum;
                /** A human-readable description for the resource */
                description: string;
                /** The ID of the listener. */
                listenerId: string;
                /** Human-readable name of the resource */
                name: string;
                /** The position of this policy on the listener. Positions start at 1 */
                position: number;
                /** Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix" */
                redirectHttpCode ? : number;
                /** Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool" */
                redirectPoolId ? : string;
                /** Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix" */
                redirectPrefix ? : string;
                /** Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url" */
                redirectUrl ? : string;
            }
            /** L7 rule */
            interface L7Rule {
                /** The comparison type for the L7 rule */
                compareType: cloud.loadbalancing.L7RuleCompareTypeEnum;
                /** The ID of the L7 rule */
                id: string;
                /** When true the logic of the rule is inverted. For example, with invert set to true, equal to would become not equal to */
                invert: boolean;
                /** The key to use for the comparison. For example, the name of the cookie to evaluate */
                key: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** The L7 rule type */
                ruleType: cloud.loadbalancing.L7RuleTypeEnum;
                /** The value to use for the comparison. For example, the file type to compare */
                value: string;
            }
            /** Loadbalancer L7 rule compare type */
            enum L7RuleCompareTypeEnum {
                "contains",
                "endsWith",
                "equalTo",
                "regex",
                "startsWith"
            }
            /** Loadbalancer L7 rule type */
            enum L7RuleTypeEnum {
                "cookie",
                "fileType",
                "header",
                "hostName",
                "path",
                "sslConnHasCert",
                "sslDNField",
                "sslVerifyResult"
            }
            /** Listener */
            interface Listener {
                /** The ID of the secret containing the certificate */
                certificateId ? : string;
                /** The ID of the default pool */
                defaultPoolId ? : string;
                /** ID of the resource */
                id: string;
                /** A list of load balancer IDs */
                loadBalancerIds: string[];
                /** Name of the resource */
                name: string;
                /** Operating status of the listener */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Port to listen on */
                port: number;
                /** Protocol of the listener */
                protocol: cloud.loadbalancing.ListenerProtocolEnum;
                /** Provisioning status of the listener */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            }
            /** Loadbalancer listener protocol */
            enum ListenerProtocolEnum {
                "http",
                "https",
                "sctp",
                "tcp",
                "terminatedHTTPS",
                "udp"
            }
            /** LoadBalancer */
            interface LoadBalancer {
                /** The UTC date and timestamp when the resource was created */
                createdAt: string;
                /** ID of the flavor */
                flavorId: string;
                /** ID of the resource */
                id: string;
                /** Name of the resource */
                name: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** UTC date and timestamp when the resource was created */
                updatedAt: string;
                /** IP address of the Virtual IP */
                vipAddress: string;
                /** Openstack ID of the network for the Virtual IP */
                vipNetworkId: string;
                /** ID of the subnet for the Virtual IP */
                vipSubnetId: string;
            }
            /** Load balancer Healthmonitor HTTP Method */
            enum LoadBalancerHealthMonitorHTTPMethodEnum {
                "CONNECT",
                "DELETE",
                "GET",
                "HEAD",
                "OPTIONS",
                "PATCH",
                "POST",
                "PUT",
                "TRACE"
            }
            /** Load balancer Healthmonitor HTTP Version */
            enum LoadBalancerHealthMonitorHTTPVersionEnum {
                "1.0",
                "1.1"
            }
            /** Load balancer Healthmonitor type */
            enum LoadBalancerHealthMonitorTypeEnum {
                "http",
                "https",
                "ping",
                "sctp",
                "tcp",
                "tls-hello",
                "udp-connect"
            }
            /** Load balancer operating status */
            enum LoadBalancerOperatingStatusEnum {
                "degraded",
                "draining",
                "error",
                "noMonitor",
                "offline",
                "online"
            }
            /** Load balancer provisioning status */
            enum LoadBalancerProvisioningStatusEnum {
                "active",
                "creating",
                "deleted",
                "deleting",
                "error",
                "updating"
            }
            /** Create a loadbalancer */
            interface LoadbalancerCreate {
                /** Loadbalancer flavor id */
                flavorId: string;
                /** Listeners to create with the loadbalancer */
                listeners: cloud.loadbalancing.loadbalancer.ListenerCreate[];
                /** Name of the member */
                name: string;
                /** Network information to create the loadbalancer */
                networkInformation: cloud.loadbalancing.loadbalancer.NetworkInformationCreate;
            }
            /** Pool */
            interface Pool {
                /** Algorithm of the pool */
                algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                /** ID of the resource */
                id: string;
                /** ID of the listener */
                listenerId ? : string;
                /** ID of the loadbalancer */
                loadbalancerId: string;
                /** Name of the resource */
                name: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Protocol of the pool */
                protocol: cloud.loadbalancing.PoolProtocolEnum;
                /** Provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Information about session persistence */
                sessionPersistence ? : cloud.loadbalancing.PoolSessionPersistence;
            }
            /** Pool algorithm */
            enum PoolAlgorithmEnum {
                "leastConnections",
                "roundRobin",
                "sourceIP"
            }
            /** Pool */
            interface PoolCreate {
                /** Algorithm of the pool */
                algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                /** ID of the listener */
                listenerId: string;
                /** ID of the loadbalancer */
                loadbalancerId: string;
                /** Name of the resource */
                name: string;
                /** Protocol of the pool */
                protocol: cloud.loadbalancing.PoolProtocolEnum;
                /** Information about session persistence */
                sessionPersistence ? : cloud.loadbalancing.PoolSessionPersistence;
            }
            /** Pool protocol */
            enum PoolProtocolEnum {
                "http",
                "https",
                "proxy",
                "sctp",
                "tcp",
                "udp"
            }
            /** PoolSessionPersistence */
            interface PoolSessionPersistence {
                /** Cookie name, only applicable to session persistence through cookie */
                cookieName: string;
                /** Type of session persistence */
                type: cloud.loadbalancing.PoolSessionPersistenceTypeEnum;
            }
            /** Pool session persistence type */
            enum PoolSessionPersistenceTypeEnum {
                "appCookie",
                "disabled",
                "httpCookie",
                "sourceIP"
            }
            /** Parameters to update a load balancer pool */
            interface PoolUpdate {
                /** Algorithm of the pool */
                algorithm ? : cloud.loadbalancing.PoolAlgorithmEnum;
                /** Name of the resource */
                name ? : string;
                /** sessionPersistence */
                sessionPersistence ? : cloud.loadbalancing.PoolSessionPersistence;
            }
            /** Health monitor for LoadBalancer */
            interface UpdateHealthMonitor {
                /** Monitor HTTP configuration */
                httpConfiguration: cloud.loadbalancing.HealthMonitorHTTPConfiguration;
                /** Number of successful checks before changing the operating status of the member to ONLINE */
                maxRetries: number;
                /** Number of allowed check failures before changing the operating status of the member to ERROR */
                maxRetriesDown: number;
                /** The name of the resource */
                name: string;
                /** Duration between sending probes to members, in format RFC3339 */
                periodicity: duration;
                /** Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the periodicity value */
                timeout: number;
            }
        }
        namespace migration {
            /** Migration */
            interface Migration {
                /** The planned date of the migration */
                date: string;
                /** Migration Id */
                migrationId: string;
                /** The id of the resource to migrate */
                resourceId: string;
                /** The type of the resource to migrate */
                resourceType: cloud.migration.ResourceTypeEnum;
            }
            /** ResourceTypeEnum */
            enum ResourceTypeEnum {
                "instance"
            }
        }
        namespace network {
            namespace gateway {
                /** Input to create a new interface for a gateway */
                interface CreateInterface {
                    /** Subnet id to add */
                    subnetId: string;
                }
                /** External information of the gateway */
                interface ExternalInformation {
                    /** External ips of the gateway */
                    ips: cloud.network.gateway.IpSubnet[];
                    /** External network ID of the gateway */
                    networkId: string;
                }
                /** Interface of the gateway */
                interface Interface {
                    /** ID of the interface */
                    id: string;
                    /** IP of the interface */
                    ip: string;
                    /** Network ID of the interface */
                    networkId: string;
                    /** Subnet ID of the interface */
                    subnetId: string;
                }
                /** IP and subnet information */
                interface IpSubnet {
                    /** External IP of the gateway */
                    ip: string;
                    /** Subnet ID of the ip */
                    subnetId: string;
                }
            } /** Input to create a gateway */
            interface CreateGateway {
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Name of the gateway */
                name: string;
                /** Information to create the network for the gateway */
                network: cloud.network.CreateNetworkForGatewaySummary;
            }
            /** Parameters to create a gateway from another resource creation */
            interface CreateGatewaySummary {
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Gateway name */
                name: string;
            }
            /** Parameters to create a network with a gateway */
            interface CreateNetwork {
                /** gateway */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Network name */
                name: string;
                /** subnet */
                subnet: cloud.network.CreateSubnetSummary;
                /** VLAN id, between 1 and 4000 */
                vlanId: number;
            }
            /** Parameters to create a network from another resource creation */
            interface CreateNetworkForGatewaySummary {
                /** Name of the network */
                name: string;
                /** Subnet of the network */
                subnet: cloud.network.CreateSubnetForGatewaySummary;
                /** VLAN id, between 1 and 4000 */
                vlanId: number;
            }
            /** Parameters to create a subnet from another resource creation */
            interface CreateSubnetForGatewaySummary {
                /** Subnet range in CIDR notation */
                cidr: string;
                /** Enable DHCP for the subnet */
                enableDhcp: boolean;
                /** IP version */
                ipVersion: number;
            }
            /** Parameters to create a subnet from another resource creation */
            interface CreateSubnetSummary {
                /** Subnet range in CIDR notation */
                cidr: string;
                /** Enable DHCP for the subnet */
                enableDhcp: boolean;
                /** Set a gateway ip for the subnet */
                enableGatewayIp: boolean;
                /** IP version */
                ipVersion: number;
            }
            /** Gateway */
            interface Gateway {
                /** External information */
                externalInformation ? : cloud.network.gateway.ExternalInformation;
                /** ID of the gateway */
                id: string;
                /** Interfaces list of the gateway */
                interfaces: cloud.network.gateway.Interface[];
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Name of the gateway */
                name: string;
                /** Gateway region */
                region: string;
                /** Status of the gateway */
                status: cloud.network.GatewayStatusEnum;
            }
            /** GatewayModelEnum */
            enum GatewayModelEnum {
                "l",
                "m",
                "s"
            }
            /** GatewayStatusEnum */
            enum GatewayStatusEnum {
                "active",
                "building",
                "down",
                "error"
            }
            /** IPPool */
            interface IPPool {
                /** Enable DHCP */
                dhcp: boolean;
                /** Last IP for this region (eg: 192.168.1.24) */
                end: string;
                /** Global network with cidr (eg: 192.168.1.0/24) */
                network: string;
                /** Region where this subnet will be created */
                region: string;
                /** First IP for this region (eg: 192.168.1.12) */
                start: string;
            }
            /** Network */
            interface Network {
                /** Network id */
                id: string;
                /** Network name */
                name: string;
                /** Details about private network in region */
                regions: cloud.network.NetworkRegion[];
                /** Network status */
                status: cloud.network.NetworkStatusEnum;
                /** Network type */
                type ? : cloud.network.NetworkTypeEnum;
                /** Network VLAN id */
                vlanId: number;
            }
            /** NetworkRegion */
            interface NetworkRegion {
                /** Network id on openstack region */
                openstackId ? : string;
                /** Network region */
                region: string;
                /** Network region status */
                status: cloud.network.NetworkRegionStatusEnum;
            }
            /** NetworkRegionStatusEnum */
            enum NetworkRegionStatusEnum {
                "ACTIVE",
                "BUILDING"
            }
            /** NetworkStatusEnum */
            enum NetworkStatusEnum {
                "ACTIVE",
                "BUILDING",
                "DELETING"
            }
            /** NetworkTypeEnum */
            enum NetworkTypeEnum {
                "private",
                "public"
            }
            /** NetworkVisibilityEnum */
            enum NetworkVisibilityEnum {
                "private",
                "public"
            }
            /** Subnet */
            interface Subnet {
                /** Subnet CIDR */
                cidr: string;
                /** Is DHCP enabled for the subnet */
                dhcpEnabled: boolean;
                /** Gateway IP in the subnet */
                gatewayIp ? : string;
                /** Subnet id */
                id: string;
                /** List of ip pools allocated in subnet */
                ipPools: cloud.network.IPPool[];
            }
            /** Input to update a gateway */
            interface UpdateGateway {
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Name of the gateway */
                name: string;
            }
        }
        namespace order {
            namespace rule {
                /** Public Cloud products availability */
                interface Availability {
                    /** Plan availability */
                    plans: cloud.order.rule.AvailabilityPlan[];
                    /** Product availability */
                    products: cloud.order.rule.AvailabilityProduct[];
                }
                /** Public Cloud plan availability */
                interface AvailabilityPlan {
                    /** Plan code */
                    code: string;
                    /** Plan is available on those regions */
                    regions: string[];
                }
                /** Public Cloud product availability */
                interface AvailabilityProduct {
                    /** Product name */
                    name: string;
                    /** Product is available on those regions */
                    regions: string[];
                }
                /** Public Cloud instance categories */
                interface InstanceCategories {
                    /** Instance categories */
                    categories: cloud.order.rule.InstanceCategory[];
                    /** Default instance category name */
                    defaultCategory: string;
                }
                /** Public Cloud instance category */
                interface InstanceCategory {
                    /** Instance category name */
                    category: cloud.order.rule.InstanceCategoryTypeEnum;
                    /** Instance category is new */
                    isNew ? : boolean;
                    /** Instance flavor matching patterns */
                    kinds: string[];
                    /** Instance category title */
                    title: string;
                }
                /** InstanceCategoryTypeEnum */
                enum InstanceCategoryTypeEnum {
                    "accelerated",
                    "balanced",
                    "baremetal",
                    "discovery",
                    "iops",
                    "ram",
                    "vps"
                }
            } /** Cloud Order */
            interface Order {
                /** Order creation date */
                date: string;
                /** Order id */
                orderId: number;
                /** Order plan code */
                planCode: string;
                /** Service created */
                serviceName ? : string;
                /** status */
                status: cloud.order.StatusEnum;
            }
            /** Order status */
            enum StatusEnum {
                "delivered",
                "delivering",
                "unknown",
                "unpaid"
            }
        }
        namespace project {
            namespace ai {
                namespace app {
                    /** AI Solutions Platform App Object */
                    interface App {
                        /** App creation date */
                        createdAt: string;
                        /** App Id */
                        id: string;
                        /** App spec */
                        spec: cloud.project.ai.app.AppSpec;
                        /** App Container Status */
                        status: cloud.project.ai.app.AppStatus;
                        /** App last update date */
                        updatedAt: string;
                        /** App user owner */
                        user: string;
                    }
                    /** AI App Image object */
                    interface AppImageInput {
                        /** URL of the Docker image */
                        url: string;
                    }
                    /** AI Solutions App Spec Object to create an app */
                    interface AppSpec {
                        /** App command */
                        command ? : string[];
                        /** Default port to access the http service inside the app */
                        defaultHttpPort ? : number;
                        /** List of environment variable to be set inside the app. Deprecated: use envVars instead */
                        env ? : cloud.project.ai.job.JobEnv[];
                        /** List of environment variable to be set inside the app */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** App image */
                        image: string;
                        /** Labels for the app */
                        labels ? : Record < string, string > ;
                        /** App name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** App readiness probe */
                        probe ? : cloud.project.ai.app.Probe;
                        /** Host region of the app */
                        region: string;
                        /** App resources */
                        resources: cloud.project.ai.Resources;
                        /** App scaling strategy */
                        scalingStrategy ? : cloud.project.ai.app.ScalingStrategy;
                        /** True if app api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** App Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions App Spec Object to create a app */
                    interface AppSpecInput {
                        /** App command */
                        command ? : string[];
                        /** Default port to access http service inside the app */
                        defaultHttpPort ? : number;
                        /** List of environment variable to be set inside the app. Deprecated: use envVars instead */
                        env ? : cloud.project.ai.job.JobEnv[];
                        /** List of environment variable to be set inside the app */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Docker or capability image to use in the app. App capability images must comply with the pattern 'image-id:version' */
                        image: string;
                        /** Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden */
                        labels ? : Record < string, string > ;
                        /** App name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** App readiness probe */
                        probe ? : cloud.project.ai.app.ProbeInput;
                        /** Host region of the app */
                        region: string;
                        /** App resources */
                        resources: cloud.project.ai.ResourcesInput;
                        /** App scaling strategy */
                        scalingStrategy ? : cloud.project.ai.app.ScalingStrategyInput;
                        /** Whether if app api port can be accessed without any authentication token */
                        unsecureHttp ? : boolean;
                        /** App Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** State of the application */
                    enum AppStateEnum {
                        "DELETED",
                        "DELETING",
                        "ERROR",
                        "FAILED",
                        "INITIALIZING",
                        "QUEUED",
                        "RUNNING",
                        "SCALING",
                        "STOPPED",
                        "STOPPING"
                    }
                    /** AI Solutions App State History Object */
                    interface AppStateHistory {
                        /** Date when the status occurred */
                        date: string;
                        /** State of the app */
                        state: cloud.project.ai.app.AppStateEnum;
                    }
                    /** AI Solutions App Status Object */
                    interface AppStatus {
                        /** Number of available replicas */
                        availableReplicas: number;
                        /** Status about the datasync linked to the app */
                        dataSync: cloud.project.ai.volume.DataSync[];
                        /** Job state history */
                        history: cloud.project.ai.app.AppStateHistory[];
                        /** Information about the app */
                        info: cloud.project.ai.Info;
                        /** App info url */
                        infoUrl ? : string;
                        /** Date of the last app state change */
                        lastTransitionDate ? : string;
                        /** App resource usage url */
                        monitoringUrl ? : string;
                        /** State of the app */
                        state ? : cloud.project.ai.app.AppStateEnum;
                        /** App access url */
                        url ? : string;
                        /** App Data linked */
                        volumes ? : cloud.project.ai.volume.VolumeStatus[];
                    }
                    /** AI Solutions App Probe Object */
                    interface Probe {
                        /** Path to access to check for readiness */
                        path ? : string;
                        /** Port to access to check for readiness */
                        port ? : number;
                    }
                    /** AI Solutions App Probe Object */
                    interface ProbeInput {
                        /** Path to access to check for readiness */
                        path ? : string;
                        /** Port to access to check for readiness */
                        port ? : number;
                    }
                    /** AI Solutions App automatic scaling strategy object */
                    interface ScalingAutomaticStrategy {
                        /** The average resource usage threshold that the app upscale or downscale will be triggered from, in percent */
                        averageUsageTarget: number;
                        /** Maximum number of replicas */
                        replicasMax: number;
                        /** Minimum number of replicas */
                        replicasMin: number;
                        /** Type of the resource to base the automatic scaling on */
                        resourceType: cloud.project.ai.app.ScalingAutomaticStrategyResourceTypeEnum;
                    }
                    /** AI Solutions App automatic scaling strategy object */
                    interface ScalingAutomaticStrategyInput {
                        /** The average resource usage threshold that the app upscale or downscale will be triggered from, in percent */
                        averageUsageTarget: number;
                        /** Maximum number of replicas */
                        replicasMax: number;
                        /** Minimum number of replicas */
                        replicasMin: number;
                        /** Type of the resource to base the automatic scaling on */
                        resourceType: cloud.project.ai.app.ScalingAutomaticStrategyResourceTypeEnum;
                    }
                    /** Resource type for App automatic scaling strategy */
                    enum ScalingAutomaticStrategyResourceTypeEnum {
                        "CPU",
                        "RAM"
                    }
                    /** AI Solutions App Status Object */
                    interface ScalingFixedStrategy {
                        /** Number of wanted replicas */
                        replicas: number;
                    }
                    /** AI Solutions App Status Object */
                    interface ScalingFixedStrategyInput {
                        /** Number of wanted replicas */
                        replicas: number;
                    }
                    /** AI Solutions App Status Object */
                    interface ScalingStrategy {
                        /** Strategy setting a variable number of replicas, based on an average resource usage threshold */
                        automatic ? : cloud.project.ai.app.ScalingAutomaticStrategy;
                        /** Strategy setting a fix number of replicas */
                        fixed ? : cloud.project.ai.app.ScalingFixedStrategy;
                    }
                    /** AI Solutions App Status Object */
                    interface ScalingStrategyInput {
                        /** Strategy setting a variable number of replicas, based on an average resource usage threshold (conflicts with 'fixed' property when both are not null) */
                        automatic ? : cloud.project.ai.app.ScalingAutomaticStrategyInput;
                        /** Strategy setting a fix number of replicas (conflicts with 'automatic' property when both are not null) */
                        fixed ? : cloud.project.ai.app.ScalingFixedStrategyInput;
                    }
                }
                namespace capabilities {
                    namespace app {
                        /** AI Solutions App image object */
                        interface Image {
                            /** Short description of the image */
                            description: string;
                            /** URL of the image documentation */
                            docUrl: string;
                            /** Unique identifier of the image */
                            id: string;
                            /** Type of licensing */
                            licensing: cloud.project.ai.capabilities.LicensingTypeEnum;
                            /** URL of the logo of the image */
                            logoUrl: string;
                            /** Name of the image */
                            name: string;
                            /** ID of the partner providing the image */
                            partnerId: string;
                            /** Name of the partner providing the image */
                            partnerName: string;
                            /** List of available versions of this image */
                            versions: string[];
                        }
                    }
                    namespace flavor {
                        /** AI Solutions Global GPU information */
                        interface GpuInformation {
                            /** The GPU Brand */
                            gpuBrand: string;
                            /** The GPU Memory in bits */
                            gpuMemory: number;
                            /** The GPU Model */
                            gpuModel: string;
                        }
                        /** AI Solutions Global Resource per flavor unit */
                        interface ResourcesPerUnit {
                            /** The amount of cpu for one unit of the flavor */
                            cpu: number;
                            /** The amount of ephemeral storage in bytes */
                            ephemeralStorage: number;
                            /** The amount of memory in bytes */
                            memory: number;
                            /** The guarantee private bandwidth in bytes per seconds */
                            privateNetwork: number;
                            /** The guarantee public bandwidth in bytes per seconds */
                            publicNetwork: number;
                        }
                    }
                    namespace job {
                        /** AI Solutions Job image object */
                        interface Image {
                            /** Short description of the image */
                            description: string;
                            /** URL of the image documentation */
                            docUrl: string;
                            /** Unique identifier of the image */
                            id: string;
                            /** URL of the logo of the image */
                            logoUrl: string;
                            /** Name of the image */
                            name: string;
                            /** List of available versions of this image */
                            versions: string[];
                        }
                    }
                    namespace notebook {
                        /** AI Solutions Notebook editor object */
                        interface Editor {
                            /** Short description of the editor */
                            description: string;
                            /** URL of the editor documentation */
                            docUrl: string;
                            /** Unique identifier of the editor */
                            id: string;
                            /** URL of the logo of the editor */
                            logoUrl: string;
                            /** Name of the editor */
                            name: string;
                            /** List of available versions of this editor */
                            versions: string[];
                        }
                        /** AI Solutions Notebook framework object */
                        interface Framework {
                            /** Short description of the framework */
                            description: string;
                            /** URL of the framework documentation */
                            docUrl: string;
                            /** Unique identifier of the framework */
                            id: string;
                            /** URL of the logo of the framework */
                            logoUrl: string;
                            /** Name of the framework */
                            name: string;
                            /** List of available versions of this framework */
                            versions: string[];
                        }
                    } /** AI Solutions Features */
                    interface Features {
                        /** Inform if the AI Solutions is in Lab mode or not */
                        lab: boolean;
                        /** Capability to add registry */
                        registry: boolean;
                    }
                    /** AI Solutions Flavor */
                    interface Flavor {
                        /** Is the flavor the default one for a flavor type */
                        default: boolean;
                        /** Flavor description */
                        description: string;
                        /** Describe gpu informations */
                        gpuInformation ? : cloud.project.ai.capabilities.flavor.GpuInformation;
                        /** Flavor id */
                        id: string;
                        /** Maximum amount available for a job / notebook */
                        max: number;
                        /** Describe the amount of resources given per unit of the flavor */
                        resourcesPerUnit: cloud.project.ai.capabilities.flavor.ResourcesPerUnit;
                        /** Flavor type */
                        type: cloud.project.ai.capabilities.FlavorTypeEnum;
                    }
                    /** Flavor Type */
                    enum FlavorTypeEnum {
                        "cpu",
                        "gpu"
                    }
                    /** Licensing Type */
                    enum LicensingTypeEnum {
                        "per-app",
                        "per-replica",
                        "per-resource"
                    }
                    /** AI Solutions Preset image */
                    interface Preset {
                        /** Preset capabilities */
                        capabilities: cloud.project.ai.capabilities.PresetCapabilities;
                        /** Preset description */
                        descriptions: string[];
                        /** URL toward the preset image documentation */
                        docUrl: cloud.project.ai.capabilities.PresetDocumentationUrl[];
                        /** Preset id */
                        id: string;
                        /** URL toward the logo to illustrate the preset */
                        logoUrl: string;
                        /** Preset name */
                        name: string;
                        /** Partner name */
                        partner: cloud.project.ai.job.Partner;
                        /** Snippet example of the doc */
                        snippet: string;
                        /** Preset type */
                        type: cloud.project.ai.capabilities.PresetTypeEnum;
                    }
                    /** AI Solutions Preset image enabled features */
                    interface PresetCapabilities {
                        /** Exec enabled */
                        exec: boolean;
                        /** Flavor types */
                        flavorTypes: cloud.project.ai.capabilities.FlavorTypeEnum[];
                        /** Log enabled */
                        log: boolean;
                        /** Resources requirements */
                        resources: cloud.project.ai.capabilities.PresetResources;
                        /** SSH enabled */
                        ssh: boolean;
                        /** Volume enabled */
                        volume: boolean;
                    }
                    /** AI Solutions Preset image */
                    interface PresetDocumentationUrl {
                        /** Documentation Name */
                        name: string;
                        /** Documentation URL */
                        url: string;
                    }
                    /** AI Solutions Preset resources requirements */
                    interface PresetResources {
                        /** Maximum number of GPUs supported */
                        maxGpu: number;
                    }
                    /** Preset Type */
                    enum PresetTypeEnum {
                        "app",
                        "job",
                        "notebook"
                    }
                    /** AI Solutions Project Quotas */
                    interface ProjectQuotas {
                        /** Project's quotas per compute-type resource (e.g CPU/GPU) */
                        resources: Record < string,
                        number > ;
                        /** Storage quota (in bits) that is allocated to the project */
                        storage: number;
                    }
                    /** AI Solutions Region */
                    interface Region {
                        /** Client Install Url */
                        cliInstallUrl: string;
                        /** Documentation Url */
                        documentationUrl: string;
                        /** Region id */
                        id: string;
                        /** Region Registry Url */
                        registryUrl: string;
                        /** Region version */
                        version: string;
                    }
                }
                namespace job {
                    /** AI Solutions Job Object */
                    interface Job {
                        /** Job creation date */
                        createdAt: string;
                        /** Job Id */
                        id: string;
                        /** Job specifications */
                        spec: cloud.project.ai.job.JobSpec;
                        /** Job status */
                        status: cloud.project.ai.job.JobStatus;
                        /** Job update date */
                        updatedAt: string;
                        /** Job user owner */
                        user: string;
                    }
                    /** AI Solutions Job Env Object */
                    interface JobEnv {
                        /** Name of the environment variable to set inside the job */
                        name: string;
                        /** Value of the environment variable to set inside the job */
                        value: string;
                    }
                    /** AI Solutions Job Spec Object to create a job */
                    interface JobSpec {
                        /** Job command */
                        command ? : string[];
                        /** Port use as the default one to access http service inside job */
                        defaultHttpPort ? : number;
                        /** List of environment variable to be set inside job. Deprecated: Use envVars instead */
                        env ? : cloud.project.ai.job.JobEnv[];
                        /** List of environment variable to be set inside job */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Job image */
                        image: string;
                        /** Labels for the job */
                        labels ? : Record < string, string > ;
                        /** Job name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** User ID to use to access the job */
                        readUser ? : string;
                        /** Host region of the job */
                        region: string;
                        /** Job resources */
                        resources: cloud.project.ai.Resources;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access to the job container */
                        sshPublicKeys ? : string[];
                        /** Maximum time to spend before killing the job */
                        timeout ? : number;
                        /** true if job api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Job Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions Job Spec Object to create a job */
                    interface JobSpecInput {
                        /** Job command */
                        command ? : string[];
                        /** Port use as the default one to access http service inside job */
                        defaultHttpPort ? : number;
                        /** List of environment variable to be set inside job. Deprecated: Use envVars instead */
                        env ? : cloud.project.ai.job.JobEnv[];
                        /** List of environment variable to be set inside job */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Job image */
                        image: string;
                        /** Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden */
                        labels ? : Record < string, string > ;
                        /** Job name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** User ID to use to access the job */
                        readUser ? : string;
                        /** Host region of the job */
                        region: string;
                        /** Job resources */
                        resources: cloud.project.ai.ResourcesInput;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access to the job container */
                        sshPublicKeys ? : string[];
                        /** Maximum time to spend before killing the job */
                        timeout ? : number;
                        /** true if job api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Job Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** State of the job */
                    enum JobStateEnum {
                        "DONE",
                        "ERROR",
                        "FAILED",
                        "FINALIZING",
                        "INITIALIZING",
                        "INTERRUPTED",
                        "INTERRUPTING",
                        "PENDING",
                        "QUEUED",
                        "RUNNING",
                        "SYNC_FAILED",
                        "TIMEOUT"
                    }
                    /** AI Solutions Job Status Object */
                    interface JobStatus {
                        /** Status about the datasync linked to the job */
                        dataSync: cloud.project.ai.volume.DataSync[];
                        /** Duration of the job */
                        duration ? : number;
                        /** Exit code of the job */
                        exitCode ? : number;
                        /** External IP of the job */
                        externalIp ? : string;
                        /** Date when the job was finalized */
                        finalizedAt ? : string;
                        /** Job state history */
                        history: cloud.project.ai.job.JobStatusHistory[];
                        /** Information about the job */
                        info: cloud.project.ai.Info;
                        /** Job info url */
                        infoUrl ? : string;
                        /** Date when the job was initialized */
                        initializingAt ? : string;
                        /** IP of the job */
                        ip ? : string;
                        /** Date of the last transition */
                        lastTransitionDate ? : string;
                        /** Job resource usage url */
                        monitoringUrl ? : string;
                        /** Date when the job was queued */
                        queuedAt ? : string;
                        /** SSH Url fot the job */
                        sshUrl ? : string;
                        /** Date when the job was started */
                        startedAt ? : string;
                        /** State of the job */
                        state ? : cloud.project.ai.job.JobStateEnum;
                        /** Date when the job was stop */
                        stoppedAt ? : string;
                        /** Job access url */
                        url ? : string;
                        /** Job Data linked */
                        volumes ? : cloud.project.ai.volume.VolumeStatus[];
                    }
                    /** AI Solutions Job Status History Object */
                    interface JobStatusHistory {
                        /** Date when the status occurred */
                        date: string;
                        /** State of the job */
                        state: cloud.project.ai.job.JobStateEnum;
                    }
                    /** AI Solutions Partner Object */
                    interface Partner {
                        /** Partner flavor */
                        flavor: string;
                        /** Partner ID */
                        id: string;
                        /** Partner name */
                        name: string;
                    }
                    /** A Image of a preset data science image */
                    interface PresetImage {
                        /** Model Image Description */
                        description: string;
                        /** Image id */
                        id: string;
                        /** Link to the Opensource Model */
                        link ? : string;
                        /** Framework logo */
                        logo ? : string;
                        /** Model Image Name */
                        name: string;
                    }
                }
                namespace notebook {
                    /** AI Solutions Platform Notebook Backup Object */
                    interface Backup {
                        /** Backup creation date */
                        createdAt: string;
                        /** Backup Id */
                        id: string;
                        /** Backup last update date */
                        updatedAt: string;
                    }
                    /** AI Solutions Data Object */
                    interface Editor {
                        /** Short description of the code editor */
                        description: string;
                        /** URL toward the code editor documentation */
                        docUrl: string;
                        /** Unique identifier of the code editor */
                        id: string;
                        /** URL toward the logo to illustrate the editor */
                        logoUrl: string;
                        /** Name of the code editor */
                        name: string;
                        /** Version of the code editor */
                        version: string;
                    }
                    /** AI Solutions Data Object */
                    interface Framework {
                        /** Short description of the framework */
                        description: string;
                        /** URL toward the framework documentation */
                        docUrl: string;
                        /** Unique identifier of the framework */
                        id: string;
                        /** URL toward the logo to illustrate the framework */
                        logoUrl: string;
                        /** Name of the framework */
                        name: string;
                        /** Available versions for the framework (default is the first one) */
                        versions: string[];
                    }
                    /** AI Solutions Platform Notebook Object */
                    interface Notebook {
                        /** Notebook creation date */
                        createdAt: string;
                        /** Notebook Id */
                        id: string;
                        /** Notebook spec */
                        spec: cloud.project.ai.notebook.NotebookSpec;
                        /** Notebook Container Status */
                        status: cloud.project.ai.notebook.NotebookStatus;
                        /** Notebook last update date */
                        updatedAt: string;
                        /** Notebook user owner */
                        user: string;
                    }
                    /** AI Solutions Framework Object to create a notebook */
                    interface NotebookEnv {
                        /** Code editor to use */
                        editorId: string;
                        /** Framework name */
                        frameworkId: string;
                        /** Framework version to use */
                        frameworkVersion ? : string;
                    }
                    /** AI Solutions Notebook Spec Object to create a notebook */
                    interface NotebookSpec {
                        /** Environment to deploy in this notebook */
                        env: cloud.project.ai.notebook.NotebookEnv;
                        /** List of environment variables to be set inside the notebook */
                        envVars: cloud.project.ai.job.JobEnv[];
                        /** Current notebook flavor */
                        flavor ? : string;
                        /** Labels for the notebook */
                        labels ? : Record < string,
                        string > ;
                        /** Notebook name */
                        name: string;
                        /** Host region of the notebook */
                        region: string;
                        /** Notebook resources */
                        resources: cloud.project.ai.Resources;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access the notebook */
                        sshPublicKeys ? : string[];
                        /** true if notebook api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions Notebook Spec Object to create a notebook */
                    interface NotebookSpecInput {
                        /** Environment to deploy in this notebook */
                        env: cloud.project.ai.notebook.NotebookEnv;
                        /** List of environment variables to be set inside the notebook */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden */
                        labels ? : Record < string,
                        string > ;
                        /** Notebook name */
                        name: string;
                        /** Host region of the notebook */
                        region: string;
                        /** Notebook resources */
                        resources: cloud.project.ai.ResourcesInput;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access the notebook */
                        sshPublicKeys ? : string[];
                        /** true if notebook api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** State of the notebook */
                    enum NotebookStateEnum {
                        "DELETING",
                        "FAILED",
                        "RUNNING",
                        "STARTING",
                        "STOPPED",
                        "STOPPING",
                        "SYNC_FAILED"
                    }
                    /** AI Solutions Notebook Status Object */
                    interface NotebookStatus {
                        /** Status about the datasync linked to the job */
                        dataSync: cloud.project.ai.volume.DataSync[];
                        /** Duration of the notebook in seconds */
                        duration ? : number;
                        /** Information about the notebook */
                        info: cloud.project.ai.Info;
                        /** Notebook info url */
                        infoUrl ? : string;
                        /** Status for the last job run */
                        lastJobStatus: cloud.project.ai.job.JobStatus;
                        /** Date when the notebook was last started */
                        lastStartedAt ? : string;
                        /** Date when the notebook was last stopped */
                        lastStoppedAt ? : string;
                        /** Notebook resource usage url */
                        monitoringUrl ? : string;
                        /** SSH Url for the notebook */
                        sshUrl ? : string;
                        /** State of the notebook */
                        state ? : cloud.project.ai.notebook.NotebookStateEnum;
                        /** Notebook access url */
                        url ? : string;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.VolumeStatus[];
                        /** State of the notebook workspace */
                        workspace ? : cloud.project.ai.notebook.NotebookWorkspace;
                    }
                    /** AI Solutions Notebook Spec Object to update a notebook */
                    interface NotebookUpdate {
                        /** Labels for the notebook */
                        labels ? : Record < string, string > ;
                        /** Notebook resources */
                        resources ? : cloud.project.ai.ResourcesInput;
                        /** SSH keys authorized to access the notebook */
                        sshPublicKeys ? : string[];
                        /** true if notebook api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions Notebook Workspace Object */
                    interface NotebookWorkspace {
                        /** The number of storage bytes free of charges for notebook workspace */
                        storageFree: number;
                        /** The number of storage bytes currently used to persist notebook workspace */
                        storageUsed: number;
                    }
                }
                namespace partner {
                    /** Representation of a partner's contract with logged in user's tenant */
                    interface Contract {
                        /** Contract signature date for the logged in user's tenant */
                        signedAt ? : string;
                        /** Map of terms of service details per locale */
                        termsOfService: Record < string, cloud.project.ai.partner.ContractTermsLocale > ;
                    }
                    /** Representation of a partner's contract on a given language */
                    interface ContractTermsLocale {
                        /** Contract file URL for a given language */
                        url: string;
                    }
                    /** Representation of a partner */
                    interface Partner {
                        /** Partner contract with logged in user's tenant */
                        contract ? : cloud.project.ai.partner.Contract;
                        /** Partner creation date */
                        createdAt: string;
                        /** Partner Description */
                        description: string;
                        /** Partner Id */
                        id: string;
                        /** Partner Name */
                        name: string;
                    }
                }
                namespace registry {
                    /** Representation of a registry */
                    interface Registry {
                        /** Registry creation date */
                        createdAt: string;
                        /** Registry Id */
                        id: string;
                        /** Docker registry password */
                        password ? : string;
                        /** Region where the registry is available */
                        region: string;
                        /** Registry update date */
                        updatedAt: string;
                        /** Docker registry URL */
                        url ? : string;
                        /** Registry user creator */
                        user: string;
                        /** Docker registry username */
                        username ? : string;
                    }
                    /** Docker registry update object */
                    interface RegistryUpdateInput {
                        /** Docker registry password */
                        password ? : string;
                        /** Docker registry URL */
                        url ? : string;
                        /** Docker registry username */
                        username ? : string;
                    }
                }
                namespace serving {
                    /** Status of API */
                    enum APIStatusEnum {
                        "pending",
                        "running",
                        "scaling",
                        "sleeping",
                        "starting",
                        "waking"
                    }
                    /** Autoscaling specification */
                    interface AutoscalingSpec {
                        /** CPU utilization threshold beyond which a scale is triggered */
                        cpuAverageUtilization ? : number;
                        /** Maximum number of replicas */
                        maxReplicas ? : number;
                        /** Memory utilization threshold beyond which a scale is triggered */
                        memoryAverageUtilization ? : number;
                        /** Minimum number of replicas */
                        minReplicas ? : number;
                    }
                    /** Backend serving the model */
                    interface Backend {
                        /** Backend ID */
                        id: cloud.project.ai.serving.BackendIdEnum;
                        /** Link to the backend project */
                        link: string;
                        /** Backend name */
                        name: string;
                    }
                    /** Backend serving the model */
                    enum BackendIdEnum {
                        "bentoml",
                        "serving-runtime"
                    }
                    /** Features of Serving Engine */
                    interface Features {
                        /** Capability to choose backend */
                        chooseBackend: boolean;
                    }
                    /** Compute Flavor for the Serving Engine */
                    interface Flavor {
                        /** Number of CPU core of the flavor */
                        cpuCore: number;
                        /** Description of the flavor */
                        description: string;
                        /** Flavor ID */
                        id: string;
                        /** RAM of the flavor (in MB) */
                        ramMB: number;
                    }
                    /** Framework of the model */
                    interface Framework {
                        /** Backends handling this framework */
                        backends: cloud.project.ai.serving.BackendIdEnum[];
                        /** Documentation page */
                        docPage: string;
                        /** Framework ID */
                        id: cloud.project.ai.serving.FrameworkIdEnum;
                        /** Link to the framework project */
                        link: string;
                        /** Framework logo */
                        logo: string;
                        /** Framework name */
                        name: string;
                        /** Recommended backend for this framework */
                        recommendedBackend: cloud.project.ai.serving.BackendIdEnum;
                        /** Framework version */
                        version: string;
                    }
                    /** Framework of the model */
                    enum FrameworkIdEnum {
                        "fastai",
                        "flow",
                        "huggingface",
                        "onnx",
                        "pmml",
                        "tensorflow_1",
                        "torch"
                    }
                    /** Metrics information */
                    interface Metrics {
                        /** Metrics endpoint query platforms */
                        endpoints: cloud.project.ai.serving.MetricsEndpoint[];
                        /** Metrics token linked to the project */
                        token: string;
                    }
                    /** User Metrics Endpoints */
                    interface MetricsEndpoint {
                        /** Name of endpoint */
                        name: string;
                        /** URL of endpoint */
                        url: string;
                    }
                    /** A deployed machine learning model */
                    interface Model {
                        /** Api status */
                        apiStatus: cloud.project.ai.serving.APIStatusEnum;
                        /** Autoscaling specification */
                        autoscalingSpec ? : cloud.project.ai.serving.AutoscalingSpec;
                        /** Model creation date */
                        createdAt: string;
                        /** Flavor id */
                        flavor ? : string;
                        /** Model id */
                        id: string;
                        /** Number of API currently running */
                        replicas ? : number;
                        /** Model url */
                        url ? : string;
                        /** API Deployed version */
                        version ? : number;
                        /** Last version status */
                        versionStatus: cloud.project.ai.serving.VersionStatusEnum;
                        /** Workflow Template used to build the model */
                        workflowTemplate ? : cloud.project.ai.serving.WorkflowTemplateEnum;
                        /** Workflow Template Parameters used to build the model */
                        workflowTemplateParameters: cloud.project.ai.serving.ModelWorkflowTemplateParameter;
                    }
                    /** Missing description */
                    interface ModelDefinition {
                        /** Autoscaling specification */
                        autoscalingSpec ? : cloud.project.ai.serving.AutoscalingSpec;
                        /** Backend which will serve your model */
                        backend ? : cloud.project.ai.serving.BackendIdEnum;
                        /** Flavor id */
                        flavor: string;
                        /** Framework of your model */
                        framework ? : cloud.project.ai.serving.FrameworkIdEnum;
                        /** Model id */
                        id: string;
                        /** Preset image to deploy */
                        imageId ? : string;
                        /** Path in the object storage container that contains your model */
                        storagePath ? : string;
                        /** Workflow template to use */
                        workflowTemplate ? : cloud.project.ai.serving.WorkflowTemplateEnum;
                    }
                    /** Parameters of the Workflow that build */
                    interface ModelWorkflowTemplateParameter {
                        /** Backend which will serve your model */
                        backend ? : cloud.project.ai.serving.BackendIdEnum;
                        /** Framework of your model */
                        framework ? : cloud.project.ai.serving.FrameworkIdEnum;
                        /** Preset Model Image used to deploy your model */
                        imageId ? : string;
                        /** Path in the object storage container that contains your model */
                        storagePath ? : string;
                    }
                    /** A serving engine namespace */
                    interface Namespace {
                        /** Cluster id */
                        clusterId: string;
                        /** Object storage container */
                        container: string;
                        /** Object storage container id */
                        containerId: string;
                        /** Name creation date */
                        createdAt: string;
                        /** Description of namespace */
                        description: string;
                        /** Hub Service url */
                        hubUrl: string;
                        /** Namespace id */
                        id: string;
                        /** Current region of the namespace */
                        region: string;
                        /** Cluster url */
                        url: string;
                    }
                    /** Missing description */
                    interface NamespaceCreation {
                        /** Object storage container name */
                        container: string;
                        /** Description of namespace */
                        description: string;
                        /** Region name */
                        region: string;
                    }
                    /** A Image of a built serving model */
                    interface PresetImage {
                        /** Model Image Description */
                        description: string;
                        /** Image id */
                        id: string;
                        /** Link to the Opensource Model */
                        link ? : string;
                        /** Model Image Name */
                        name: string;
                        /** RAM requirement per model instantiated (in MB) */
                        ramRequirementMB ? : number;
                    }
                    /** Representation of a registry */
                    interface Registry {
                        /** True if user have a registry attached */
                        custom: boolean;
                        /** Docker registry password */
                        password ? : string;
                        /** Docker registry URL */
                        url ? : string;
                        /** Docker registry username */
                        username ? : string;
                    }
                    /** Missing description */
                    interface RegistryResponse {
                        /** message */
                        message: string;
                    }
                    /** A token to access / manage a machine learning Model */
                    interface Token {
                        /** Token creation date */
                        createdAt: string;
                        /** A list of access group to grant */
                        groups: cloud.project.ai.serving.TokenGroupEnum[];
                        /** Token id */
                        id: string;
                        /** Access resource of the token. You can provide: a strict id that will exactly match the resource id or a fuzzy string that ends with * to match multiple resource starting with the same prefix or a * to match all your resources */
                        resource: string;
                        /** The JWT Token */
                        token ? : string;
                    }
                    /** A serving engine access group */
                    enum TokenGroupEnum {
                        "model-evaluation",
                        "model-management"
                    }
                    /** Status of current version */
                    enum VersionStatusEnum {
                        "build-error",
                        "building",
                        "built",
                        "deployed",
                        "deploying",
                        "failed",
                        "pending",
                        "rollback"
                    }
                    /** The workflow Template to use */
                    enum WorkflowTemplateEnum {
                        "build-image",
                        "preset-image"
                    }
                }
                namespace token {
                    /** AI Solutions Application Token */
                    interface Token {
                        /** Application token creation date */
                        createdAt: string;
                        /** Application token Id */
                        id: string;
                        /** Application token spec */
                        spec: cloud.project.ai.token.TokenSpec;
                        /** Application token status */
                        status: cloud.project.ai.token.TokenStatus;
                        /** Application token update date */
                        updatedAt: string;
                    }
                    /** AI Solutions Application Token Spec Object to create a notebook */
                    interface TokenSpec {
                        /** Application token label selector */
                        labelSelector ? : string;
                        /** Application token name */
                        name: string;
                        /** Public Cloud Storage Region */
                        region: string;
                        /** Role granted by this application token */
                        role: cloud.project.ai.TokenRoleEnum;
                    }
                    /** AI Solutions Application Token Status Object */
                    interface TokenStatus {
                        /** Application token value to use as a Bearer */
                        value ? : string;
                        /** Application token version */
                        version: number;
                    }
                }
                namespace volume {
                    /** AI Solutions data store container Volume Object */
                    interface DataStore {
                        /** Data store alias */
                        alias: string;
                        /** Name of the tar archive that needs to be saved */
                        archive ? : string;
                        /** Data store container to attach */
                        container: string;
                        /** True if data is stored on OVHcloud AI's internal storage */
                        internal ? : boolean;
                        /** Prefix to fetch only part of the volume */
                        prefix ? : string;
                    }
                    /** AI Solutions Data Sync */
                    interface DataSync {
                        /** Data Sync creation date */
                        createdAt: string;
                        /** Data Sync Id */
                        id: string;
                        /** Data Sync specifications */
                        spec: cloud.project.ai.volume.DataSyncSpec;
                        /** Data Sync status */
                        status: cloud.project.ai.volume.DataSyncStatus;
                        /** Data Sync update date */
                        updatedAt: string;
                    }
                    /** Data Sync Direction */
                    enum DataSyncEnum {
                        "pull",
                        "push"
                    }
                    /** State of the progress sync */
                    enum DataSyncProgressStateEnum {
                        "DONE",
                        "ERROR",
                        "FAILED",
                        "INTERRUPTED",
                        "QUEUED",
                        "RUNNING"
                    }
                    /** AI Solutions Data Sync Spec */
                    interface DataSyncSpec {
                        /** Direction of the sync */
                        direction: cloud.project.ai.volume.DataSyncEnum;
                        /** True if the user has created the object */
                        manual: boolean;
                        /** Only sync this volume */
                        volume ? : string;
                    }
                    /** State of the data sync */
                    enum DataSyncStateEnum {
                        "DONE",
                        "ERROR",
                        "FAILED",
                        "INTERRUPTED",
                        "QUEUED",
                        "RUNNING"
                    }
                    /** AI Solutions Data Sync Status */
                    interface DataSyncStatus {
                        /** Date when the data sync ended */
                        endedAt ? : string;
                        /** Information about the data sync */
                        info: cloud.project.ai.Info;
                        /** Progress status of the data sync */
                        progress: cloud.project.ai.volume.Progress[];
                        /** Date when the data sync was queued */
                        queuedAt: string;
                        /** Date when the data sync was started */
                        startedAt ? : string;
                        /** State of the data sync */
                        state: cloud.project.ai.volume.DataSyncStateEnum;
                    }
                    /** AI Solutions private Swift container Volume Object. Deprecated: Use DataStore instead */
                    interface PrivateSwift {
                        /** Name of the tar archive that needs to be saved */
                        archive ? : string;
                        /** Public Cloud Storage container to attach */
                        container: string;
                        /** True if data is stored on OVHcloud AI's internal storage */
                        internal ? : boolean;
                        /** Prefix to fetch only part of the volume */
                        prefix ? : string;
                        /** Public Cloud Storage Region */
                        region: string;
                    }
                    /** AI Solutions Progress Object */
                    interface Progress {
                        /** Number of completed files */
                        completed: number;
                        /** Progress creation date */
                        createdAt: string;
                        /** Number of deleted files */
                        deleted: number;
                        /** Direction of the progress sync */
                        direction: cloud.project.ai.volume.DataSyncEnum;
                        /** ETA to finish in seconds */
                        eta: number;
                        /** Number of failed files */
                        failed: number;
                        /** Progress Id */
                        id: string;
                        /** Volume information */
                        info: string;
                        /** Number of processed files */
                        processed: number;
                        /** Number of skipped files */
                        skipped: number;
                        /** State of the progress sync */
                        state: cloud.project.ai.volume.DataSyncProgressStateEnum;
                        /** Total number of files */
                        total: number;
                        /** Transferred size in bytes */
                        transferredBytes: number;
                        /** Progress update date */
                        updatedAt: string;
                    }
                    /** AI Solutions public Git repository Volume Object */
                    interface PublicGit {
                        /** URL of the public git repository */
                        url: string;
                    }
                    /** AI Solutions public Swift container Volume Object */
                    interface PublicSwift {
                        /** URL of the public swift container */
                        url: string;
                    }
                    /** AI Solutions No Source Volume Object */
                    interface Standalone {
                        /** Name of the volume */
                        name ? : string;
                    }
                    /** AI Solutions Volume Object */
                    interface Volume {
                        /** Enable/disable volume caching */
                        cache: boolean;
                        /** Public Cloud Storage container to attach */
                        container ? : string;
                        /** Volume details for data store containers */
                        dataStore ? : cloud.project.ai.volume.DataStore;
                        /** Volume Id. Deprecated: moved to status.volumes[] */
                        id ? : string;
                        /** Path where to mount the data inside the container */
                        mountPath: string;
                        /** Permissions to use on the mounted volume */
                        permission: cloud.project.ai.VolumePermissionEnum;
                        /** Prefix to fetch only part of the volume */
                        prefix ? : string;
                        /** Volume details for private swift containers. Deprecated: Use dataStore instead */
                        privateSwift ? : cloud.project.ai.volume.PrivateSwift;
                        /** Volume details for public git repositories */
                        publicGit ? : cloud.project.ai.volume.PublicGit;
                        /** Volume details for public swift containers */
                        publicSwift ? : cloud.project.ai.volume.PublicSwift;
                        /** Public Cloud Storage Region */
                        region ? : string;
                        /** Volume details for volumes that do not have a datasource */
                        standalone ? : cloud.project.ai.volume.Standalone;
                        /** Target volume details for data store containers */
                        targetDataStore ? : cloud.project.ai.volume.DataStore;
                        /** Target volume details for private swift containers. Deprecated: Use targetDataStore instead */
                        targetPrivateSwift ? : cloud.project.ai.volume.PrivateSwift;
                    }
                    /** AI Solutions Volume Object */
                    interface VolumeStatus {
                        /** Volume Id */
                        id: string;
                        /** Path where the data is mounted inside the container */
                        mountPath: string;
                        /** User volume Id */
                        userVolumeId: string;
                    }
                } /** Authorization status */
                interface AuthorizationStatus {
                    /** True if project is authorized to use AI Solutions Platform */
                    authorized: boolean;
                }
                /** AI Solutions basic auth credentials input */
                interface BasicAuthCredentialsInput {
                    /** Basic Auth Password */
                    password: string;
                    /** Basic Auth Username */
                    username: string;
                }
                /** AI Solutions CLI command */
                interface Command {
                    /** AI Solutions CLI command */
                    command: string;
                }
                /** AI Solutions data store container Volume Object */
                interface DataStore {
                    /** Data store alias */
                    alias: string;
                    /** Owner type of the datastore */
                    owner: cloud.project.ai.DataStoreOwnerEnum;
                    /** Type of the datastore */
                    type: cloud.project.ai.DataStoreTypeEnum;
                }
                /** AI Solutions data store auth */
                interface DataStoreAuth {
                    /** Access key to the datastore */
                    accessKey ? : string;
                    /** Region of the datastore */
                    region ? : string;
                    /** S3 Url of the datastore */
                    s3Url ? : string;
                    /** Secret key to the datastore */
                    secretKey ? : string;
                    /** Swift (or S3) Auth token */
                    token ? : string;
                    /** Swift storage URL */
                    url ? : string;
                }
                /** AI Solutions data store credentials Object */
                interface DataStoreCredentialsInput {
                    /** Git data store credentials */
                    git ? : cloud.project.ai.GitCredentialsInput;
                    /** S3 data store credentials */
                    s3 ? : cloud.project.ai.S3CredentialsInput;
                }
                /** AI Solutions data store container Volume Object */
                interface DataStoreInput {
                    /** Data store alias */
                    alias: string;
                    /** Data store credentials */
                    credentials: cloud.project.ai.DataStoreCredentialsInput;
                    /** Datastore endpoint */
                    endpoint: string;
                    /** Data store owner */
                    owner: cloud.project.ai.DataStoreOwnerEnum;
                    /** Data store prefix */
                    prefix ? : string;
                    /** Data store type */
                    type: cloud.project.ai.DataStoreTypeEnum;
                }
                /** Data Store Owner */
                enum DataStoreOwnerEnum {
                    "customer",
                    "ovhcloud"
                }
                /** Data Store Type */
                enum DataStoreTypeEnum {
                    "git",
                    "s3",
                    "swift"
                }
                /** Basic model with a single message field */
                interface GenericResponse {
                    /** message */
                    message: string;
                }
                /** AI Solutions data store git credentials input */
                interface GitCredentialsInput {
                    /** Basic Auth data store credentials */
                    basicAuth ? : cloud.project.ai.BasicAuthCredentialsInput;
                    /** SSH data store credentials */
                    sshKeypair ? : cloud.project.ai.SshCredentialsInput;
                }
                /** Information about the state of this entity */
                interface Info {
                    /** Info code identifier */
                    code: cloud.project.ai.InfoCodeEnum;
                    /** Formatted message */
                    message: string;
                }
                /** Code enum for Info object */
                enum InfoCodeEnum {
                    "APP_CREATE_ERROR",
                    "APP_ERROR",
                    "APP_FAILED",
                    "APP_INITIALIZING",
                    "APP_INTERRUPTED_BY_PLATFORM",
                    "APP_QUEUED",
                    "APP_RUNNING",
                    "APP_SCALING",
                    "APP_STOPPED",
                    "APP_STOPPING",
                    "COMPATIBILITY",
                    "DATASYNC_AUTHENTICATE_FAILED",
                    "DATASYNC_DATA_STORE_NOT_FOUND",
                    "DATASYNC_DONE",
                    "DATASYNC_ERROR",
                    "DATASYNC_FAILED",
                    "DATASYNC_INTERRUPTED",
                    "DATASYNC_INVALID_CONTAINER",
                    "DATASYNC_QUEUED",
                    "DATASYNC_RETRY_ERROR",
                    "DATASYNC_RUNNING",
                    "JOB_CREATE_CONTAINER_CONFIG_ERROR",
                    "JOB_CREATE_CONTAINER_ERROR",
                    "JOB_DONE",
                    "JOB_ERROR",
                    "JOB_EVICTED",
                    "JOB_FAILED",
                    "JOB_FAILED_WITH_MESSAGE",
                    "JOB_FINALIZING",
                    "JOB_IMAGE_INSPECT_ERROR",
                    "JOB_IMAGE_PULL",
                    "JOB_IMAGE_PULL_BACKOFF",
                    "JOB_INITIALIZING",
                    "JOB_INTERRUPTED",
                    "JOB_INTERRUPTED_BY_PLATFORM",
                    "JOB_INTERRUPTING",
                    "JOB_INVALID_IMAGE_NAME",
                    "JOB_PENDING",
                    "JOB_QUEUED",
                    "JOB_REGISTRY_UNAVAILABLE",
                    "JOB_RUNNING",
                    "JOB_SYNC_FAILED",
                    "JOB_TIMEOUT",
                    "NOTEBOOK_FAILED",
                    "NOTEBOOK_FAILED_WITH_MESSAGE",
                    "NOTEBOOK_FINALIZING",
                    "NOTEBOOK_INITIALIZING",
                    "NOTEBOOK_PENDING",
                    "NOTEBOOK_RUNNING",
                    "NOTEBOOK_STARTING",
                    "NOTEBOOK_STOPPED",
                    "NOTEBOOK_STOPPING",
                    "NOTEBOOK_SYNC_FAILED"
                }
                /** AI Solutions Label Object */
                interface Label {
                    /** Name of the label to update/add */
                    name: string;
                    /** Value of the label to update/add, is there is no value the label is deleted */
                    value ? : string;
                }
                /** Log line */
                interface LogLine {
                    /** Content of the log */
                    content ? : string;
                    /** Datetime of the log */
                    timestamp ? : string;
                }
                /** Instance Logs */
                interface Logs {
                    /** Last activity date */
                    lastActivity ? : string;
                    /** Logs lines */
                    logs: cloud.project.ai.LogLine[];
                }
                /** Possible value to order result */
                enum OrderEnum {
                    "asc",
                    "desc"
                }
                /** AI Solutions Resource Object */
                interface Resources {
                    /** Number of vCPU resources requested */
                    cpu: number;
                    /** The amount of ephemeral storage in bytes */
                    ephemeralStorage: number;
                    /** Current instance flavor */
                    flavor: string;
                    /** Number of GPU resources requested */
                    gpu: number;
                    /** The GPU Brand */
                    gpuBrand ? : string;
                    /** The GPU Memory in bits */
                    gpuMemory ? : number;
                    /** The GPU Model */
                    gpuModel ? : string;
                    /** The amount of memory in bytes */
                    memory: number;
                    /** The guarantee private bandwidth in bytes per seconds */
                    privateNetwork: number;
                    /** The guarantee public bandwidth in bytes per seconds */
                    publicNetwork: number;
                }
                /** AI Solutions Resource Object */
                interface ResourcesInput {
                    /** Number of vCPU resources requested */
                    cpu ? : number;
                    /** The amount of ephemeral storage in bytes */
                    ephemeralStorage ? : number;
                    /** Instance flavor */
                    flavor ? : string;
                    /** Number of GPU resources requested */
                    gpu ? : number;
                    /** The GPU Brand */
                    gpuBrand ? : string;
                    /** The GPU Memory in bytes */
                    gpuMemory ? : number;
                    /** The GPU Model */
                    gpuModel ? : string;
                    /** The amount of memory in bytes */
                    memory ? : number;
                    /** The private network bandwidth in bits per seconds */
                    privateNetwork ? : number;
                    /** The public network bandwidth in bits per seconds */
                    publicNetwork ? : number;
                }
                /** AI Solutions S3 credentials */
                interface S3CredentialsInput {
                    /** S3 Access Key */
                    accessKey: string;
                    /** S3 Region */
                    region: string;
                    /** S3 Private Key */
                    secretKey: string;
                }
                /** Shutdown strategy of an instance */
                enum ShutdownStrategyEnum {
                    "Stop"
                }
                /** AI Solutions SSH credentials input */
                interface SshCredentialsInput {
                    /** SSH private key */
                    privateKey: string;
                    /** SSH public key */
                    publicKey: string;
                }
                /** Role granted with an application token */
                enum TokenRoleEnum {
                    "ai_training_operator",
                    "ai_training_read"
                }
                /** Permissions to apply on a volume */
                enum VolumePermissionEnum {
                    "RO",
                    "RW",
                    "RWD"
                }
            }
            namespace certificate {
                /** Import external certificate */
                interface Import {
                    /** PEM encoded certificate */
                    cert: text;
                    /** Optional PEM encoded certificate chain */
                    chain ? : text;
                    /** PEM encoded certificate private key */
                    key: string;
                }
                /** Certificate SAN */
                interface ServerAlternativeName {
                    /** SAN kind */
                    kind: cloud.project.certificate.ServerAlternativeNameKindEnum;
                    /** Name of the given kind */
                    name: string;
                }
                /** SAN kind */
                enum ServerAlternativeNameKindEnum {
                    "DNS",
                    "EMAIL",
                    "IP",
                    "URI"
                }
            }
            namespace dataIntegration {
                /** Connector's availability */
                interface Availability {
                    /** End of life of the connector */
                    endOfLife ? : string;
                    /** Release date of the connector */
                    releaseDate: string;
                    /** Status of the availability */
                    status: cloud.project.database.availability.StatusEnum;
                }
                /** Connector parameters */
                interface CapabilitiesConnectorParameter {
                    /** Default value of parameter */
                    default ? : string;
                    /** Description of parameter */
                    description: string;
                    /** Parameter is mandatory or not */
                    mandatory: boolean;
                    /** Name of parameter */
                    name: string;
                    /** Type of parameter */
                    type: string;
                    /** Validator of parameter */
                    validator: cloud.project.dataIntegration.ParameterValidator;
                }
                /** Connection information */
                interface Connection {
                    /** Last date of the connection */
                    date ? : string;
                    /** Connection status */
                    status: cloud.project.dataIntegration.ConnectionStatusEnum;
                }
                /** Possible state of connection */
                enum ConnectionStatusEnum {
                    "CONNECTION_FAILED",
                    "CONNECTION_RUNNING",
                    "CONNECTION_SUCCEED"
                }
                /** Connector information */
                interface Connector {
                    /** Connector's availability */
                    availability: cloud.project.dataIntegration.Availability;
                    /** Description of the connector */
                    description: string;
                    /** Uri of the documentation */
                    documentationUrl ? : string;
                    /** Connector Id */
                    id: string;
                    /** Connector Name */
                    name: string;
                    /** List of needed parameters */
                    parameters ? : cloud.project.dataIntegration.CapabilitiesConnectorParameter[];
                    /** Version of the connector */
                    version: string;
                }
                /** Destination information */
                interface Destination {
                    /** Uuid of the connector destination type */
                    connectorId: string;
                    /** Creation date of the destination */
                    creationDate ? : string;
                    /** Destination Id */
                    id: string;
                    /** Last update date of the destination */
                    lastUpdateDate ? : string;
                    /** Name of the destination */
                    name: string;
                    /** List of parameter need for the connector */
                    parameters: cloud.project.dataIntegration.Parameter[];
                    /** Current state of the destination */
                    status: cloud.project.dataIntegration.ConnectionStatusEnum;
                }
                /** Editable destination properties */
                interface DestinationUpdate {
                    /** Destination Id */
                    id: string;
                    /** Name of the destination */
                    name ? : string;
                    /** List of parameter need for the connector */
                    parameters ? : cloud.project.dataIntegration.Parameter[];
                }
                /** Job information */
                interface Job {
                    /** Creation date of the job */
                    createdAt: string;
                    /** End date of the job */
                    endedAt ? : string;
                    /** Uuid of the job */
                    id: string;
                    /** Start date of the job */
                    startedAt ? : string;
                    /** Current state of the job */
                    status: cloud.project.dataIntegration.StatusEnum;
                }
                /** Input to start a job */
                interface JobStart {
                    /** List of parameters to use for this job */
                    parameters ? : cloud.project.dataIntegration.Parameter[];
                }
                /** Metadata from source */
                interface Metadata {
                    /** End date of the metadata extraction */
                    endedAt ? : string;
                    /** All metadatas fields from the table */
                    metadata ? : cloud.project.dataIntegration.MetadataDescription[];
                    /** Start date of the metadata extraction */
                    startedAt: string;
                    /** Last status of the metadata extraction */
                    status: cloud.project.dataIntegration.MetadataStatusEnum;
                    /** Table name */
                    tableName: string;
                }
                /** Metadata description */
                interface MetadataDescription {
                    /** Cardinality of the field description */
                    cardinality: number;
                    /** Maximum field value */
                    max: double;
                    /** Minimum field value */
                    min: double;
                    /** Field name */
                    name: string;
                    /** Field type */
                    type: string;
                }
                /** Possible state of the metadata extraction */
                enum MetadataStatusEnum {
                    "FAILED",
                    "PROCESSING",
                    "STOP",
                    "SUCCESS",
                    "UNKNOWN"
                }
                /** Parameters of the connector */
                interface Parameter {
                    /** Name of parameter */
                    name: string;
                    /** Value of parameter */
                    value: string;
                }
                /** Conditions to which the value of parameter must conform */
                interface ParameterValidator {
                    /** Maximal value of parameter */
                    max ? : double;
                    /** Minimal value of parameter */
                    min ? : double;
                    /** Regex to match value of parameter */
                    regex ? : string;
                }
                /** Source information */
                interface Source {
                    /** Uuid of the connector source type */
                    connectorId: string;
                    /** Creation date of the source */
                    creationDate ? : string;
                    /** Uuid of the source */
                    id: string;
                    /** Last update date of the source */
                    lastUpdateDate ? : string;
                    /** Name of the source */
                    name: string;
                    /** List of parameter need for the connector */
                    parameters: cloud.project.dataIntegration.Parameter[];
                    /** Current state of the source */
                    status: cloud.project.dataIntegration.ConnectionStatusEnum;
                }
                /** Editable source properties */
                interface SourceUpdate {
                    /** Uuid of the source */
                    id: string;
                    /** Name of the source */
                    name ? : string;
                    /** List of parameter needed for the connector */
                    parameters ? : cloud.project.dataIntegration.Parameter[];
                }
                /** Possible state of the connector */
                enum StatusEnum {
                    "COMPLETED",
                    "DELETED",
                    "FAILED",
                    "PROVISIONING",
                    "RUNNING",
                    "SUBMITTED",
                    "TERMINATED",
                    "UNKNOWN"
                }
                /** Workflow information */
                interface Workflow {
                    /** Description of the workflow */
                    description ? : string;
                    /** Uuid of the destination to use */
                    destinationId: string;
                    /** Name of the destination to use */
                    destinationName: string;
                    /** Whether workflow is enabled */
                    enabled: boolean;
                    /** Uuid of the workflow */
                    id: string;
                    /** Last jobs execution date  */
                    lastExecutionDate ? : string;
                    /** Name of the workflow */
                    name: string;
                    /** List of parameters for the workflow */
                    parameters: cloud.project.dataIntegration.Parameter[];
                    /** Default region where jobs will run */
                    region: string;
                    /** Schedule of the workflow in cron format */
                    schedule ? : string;
                    /** Uuid of the source to use */
                    sourceId: string;
                    /** Name of the source to use */
                    sourceName: string;
                    /** Status of the workflow */
                    status: cloud.project.dataIntegration.WorkflowStatusEnum;
                }
                /** Workflow capabilities */
                interface WorkflowCapabilities {
                    /** Name of the destination connector */
                    destinationConnector: string;
                    /** Uuid of the destination connector */
                    destinationConnectorId: string;
                    /** List of parameters that can be specified for the workflow */
                    parameters: cloud.project.dataIntegration.WorkflowCapabilitiesParameter[];
                    /** Name of the source connector */
                    sourceConnector: string;
                    /** Uuid of the source connector */
                    sourceConnectorId: string;
                }
                /** Workflow available parameters */
                interface WorkflowCapabilitiesParameter {
                    /** Default value of parameter */
                    default ? : string;
                    /** Description of parameter */
                    description: string;
                    /** Parameter is mandatory or not */
                    mandatory: boolean;
                    /** Name of parameter */
                    name: string;
                    /** Can be overrided when launching a job */
                    overridable: boolean;
                    /** Type of parameter */
                    type: string;
                    /** Validator of parameter */
                    validator: cloud.project.dataIntegration.ParameterValidator;
                }
                /** Possible state of the worfklow */
                enum WorkflowStatusEnum {
                    "CREATING",
                    "ERROR",
                    "READY"
                }
                /** Editable workflow properties */
                interface WorkflowUpdate {
                    /** Description of the workflow */
                    description ? : string;
                    /** Whether workflow is enabled */
                    enabled ? : boolean;
                    /** Uuid of the workflow */
                    id: string;
                    /** Name of the workflow */
                    name ? : string;
                    /** Schedule of the workflow in cron format */
                    schedule ? : string;
                }
            }
            namespace dataProcessing {
                namespace notebook {
                    /** Capabilities of data processing service */
                    interface Capability {
                        /** Available versions of the engine */
                        availableVersions: cloud.project.dataProcessing.EngineVersion[];
                        /** Name of the engine */
                        name: string;
                        /** Templates of the engine */
                        templates: cloud.project.dataProcessing.CapabilitiesNotebookTemplate[];
                    }
                    /** Data Processing Notebook Object */
                    interface Notebook {
                        /** Notebook Id */
                        id: string;
                        /** Notebook spec */
                        spec: cloud.project.dataProcessing.notebook.NotebookSpec;
                        /** Notebook Container Status */
                        status: cloud.project.dataProcessing.notebook.NotebookStatus;
                        /** Notebook last update date */
                        updatedAt: string;
                    }
                    /** Data Processing Object to create a notebook */
                    interface NotebookEnv {
                        /** Engine name to use */
                        engineName ? : string;
                        /** Engine version to use */
                        engineVersion ? : string;
                    }
                    /** Data Processing Notebook Spec Object to create a notebook */
                    interface NotebookSpec {
                        /** Environment to deploy in this notebook */
                        env: cloud.project.dataProcessing.notebook.NotebookEnv;
                        /** Notebook name */
                        name: string;
                        /** Host region of the notebook */
                        region: string;
                    }
                    /** State of the notebook */
                    enum NotebookStateEnum {
                        "DELETED",
                        "FAILED",
                        "RUNNING",
                        "STARTING",
                        "STOPPED",
                        "STOPPING"
                    }
                    /** Data Processing Notebook Status Object */
                    interface NotebookStatus {
                        /** Duration of the notebook in seconds */
                        duration ? : number;
                        /** Information about the notebook */
                        info: cloud.project.dataProcessing.Info;
                        /** Date when the notebook was last started */
                        lastStartedAt ? : string;
                        /** Date when the notebook was last stopped */
                        lastStoppedAt ? : string;
                        /** State of the notebook */
                        state ? : cloud.project.dataProcessing.notebook.NotebookStateEnum;
                        /** Notebook access url */
                        url ? : string;
                    }
                } /** Authorization status */
                interface AuthorizationStatus {
                    /** True is project is authorized to use Data Processing service */
                    authorized: boolean;
                }
                /** Engine parameters */
                interface CapabilitiesEngineParameter {
                    /** Default value of parameter */
                    default ? : string;
                    /** Description of parameter */
                    description: string;
                    /** Parameter is mandatory or not */
                    mandatory: boolean;
                    /** Name of parameter */
                    name: string;
                    /** Type of parameter */
                    type: string;
                    /** Validator of parameter */
                    validator: cloud.project.dataProcessing.ParameterValidator;
                }
                /** Engine Template */
                interface CapabilitiesNotebookTemplate {
                    /** Number of driver cores of the template */
                    driverCores: number;
                    /** Driver memory in bytes of the template */
                    driverMemory: number;
                    /** Driver memory overhead in bytes of the template */
                    driverMemoryOverhead: number;
                    /** Number of executor cores of the template */
                    executorCores: number;
                    /** Executor memory in bytes of the template */
                    executorMemory: number;
                    /** Executor memory overhead in bytes of the template */
                    executorMemoryOverhead: number;
                    /** Number of executors of the template */
                    executorNumber: number;
                    /** ID of the template */
                    id: number;
                    /** Name of the template */
                    name: string;
                }
                /** Engine Template */
                interface CapabilitiesTemplate {
                    /** Number of cores of the template */
                    cores: number;
                    /** ID of the template */
                    id: number;
                    /** Memory in bytes of the template */
                    memory: number;
                }
                /** Capabilities of data processing service */
                interface Capability {
                    /** Available versions of the engine */
                    availableVersions: cloud.project.dataProcessing.EngineVersion[];
                    /** Name of the engine */
                    name: string;
                    /** Parameters of the engine */
                    parameters: cloud.project.dataProcessing.CapabilitiesEngineParameter[];
                    /** Templates of the engine */
                    templates: cloud.project.dataProcessing.CapabilitiesTemplate[];
                }
                /** Parameters of the engine */
                interface EngineParameter {
                    /** Name of parameters */
                    name: string;
                    /** Value of parameters */
                    value: string;
                }
                /** Engine version */
                interface EngineVersion {
                    /** List of region available of the version */
                    availableRegions: string[];
                    /** Description of the engine */
                    description: string;
                    /** Name of the version */
                    name: string;
                }
                /** Information about the state of this entity */
                interface Info {
                    /** Info code identifier */
                    code: cloud.project.dataProcessing.InfoCodeEnum;
                    /** Formatted message */
                    message: string;
                }
                /** Code enum for Info object */
                enum InfoCodeEnum {
                    "APP_CREATE_ERROR",
                    "APP_ERROR",
                    "APP_FAILED",
                    "APP_INITIALIZING",
                    "APP_INTERRUPTED_BY_PLATFORM",
                    "APP_QUEUED",
                    "APP_RUNNING",
                    "APP_SCALING",
                    "APP_STOPPED",
                    "APP_STOPPING",
                    "COMPATIBILITY",
                    "DATASYNC_AUTHENTICATE_FAILED",
                    "DATASYNC_DONE",
                    "DATASYNC_ERROR",
                    "DATASYNC_FAILED",
                    "DATASYNC_INTERRUPTED",
                    "DATASYNC_INVALID_CONTAINER",
                    "DATASYNC_QUEUED",
                    "DATASYNC_RETRY_ERROR",
                    "DATASYNC_RUNNING",
                    "JOB_CREATE_CONTAINER_CONFIG_ERROR",
                    "JOB_CREATE_CONTAINER_ERROR",
                    "JOB_DONE",
                    "JOB_ERROR",
                    "JOB_EVICTED",
                    "JOB_FAILED",
                    "JOB_FAILED_WITH_MESSAGE",
                    "JOB_FINALIZING",
                    "JOB_IMAGE_INSPECT_ERROR",
                    "JOB_IMAGE_PULL",
                    "JOB_IMAGE_PULL_BACKOFF",
                    "JOB_INITIALIZING",
                    "JOB_INTERRUPTED",
                    "JOB_INTERRUPTED_BY_PLATFORM",
                    "JOB_INTERRUPTING",
                    "JOB_INVALID_IMAGE_NAME",
                    "JOB_PENDING",
                    "JOB_QUEUED",
                    "JOB_REGISTRY_UNAVAILABLE",
                    "JOB_RUNNING",
                    "JOB_TIMEOUT",
                    "NOTEBOOK_FAILED",
                    "NOTEBOOK_FAILED_WITH_MESSAGE",
                    "NOTEBOOK_FINALIZING",
                    "NOTEBOOK_INITIALIZING",
                    "NOTEBOOK_PENDING",
                    "NOTEBOOK_RUNNING",
                    "NOTEBOOK_STARTING",
                    "NOTEBOOK_STOPPED",
                    "NOTEBOOK_STOPPING"
                }
                /** Job information */
                interface Job {
                    /** Name of the container where the code and the log of the job is */
                    containerName: string;
                    /** Creation date of the job */
                    creationDate ? : string;
                    /** End date of the job */
                    endDate ? : string;
                    /** Engine of the job */
                    engine: string;
                    /** Parameters of job engine */
                    engineParameters: cloud.project.dataProcessing.EngineParameter[];
                    /** Version of the engine */
                    engineVersion: string;
                    /** UUID of the job */
                    id: string;
                    /** Name */
                    name: string;
                    /** Notebook associated to the job */
                    notebook ? : string;
                    /** Openstack region of the job */
                    region: string;
                    /** Return code of the job */
                    returnCode ? : number;
                    /** Start date of the job */
                    startDate ? : string;
                    /** Current state of the job */
                    status: cloud.project.dataProcessing.StatusEnum;
                    /** Maximum "Time To Live" (in RFC3339 (duration)) of this job, after which it will be automatically terminated */
                    ttl ? : duration;
                }
                /** Job Logs */
                interface JobLogs {
                    /** Logs lines */
                    logs: cloud.project.dataProcessing.LogLine[];
                    /** Address log url */
                    logsAddress ? : string;
                    /** Start date */
                    startDate: string;
                }
                /** Log line */
                interface LogLine {
                    /** Content of the log */
                    content: string;
                    /** Id of the log */
                    id: number;
                    /** Datetime of the log */
                    timestamp: string;
                }
                /** Metrics information */
                interface Metrics {
                    /** Metrics endpoint query platforms */
                    endpoints: cloud.project.dataProcessing.MetricsEndpoint[];
                    /** Metrics token linked to the project */
                    token: string;
                }
                /** Job Logs */
                interface MetricsEndpoint {
                    /** Name of endpoint */
                    name: string;
                    /** URL of endpoint */
                    url: string;
                }
                /** Conditions to which the value of parameter must conform */
                interface ParameterValidator {
                    /** Maximal value of parameter */
                    max ? : double;
                    /** Minimal value of parameter */
                    min ? : double;
                    /** Regex to match value of parameter */
                    regex ? : string;
                }
                /** Possible state of the job */
                enum StatusEnum {
                    "CANCELLING",
                    "COMPLETED",
                    "FAILED",
                    "PENDING",
                    "RUNNING",
                    "SUBMITTED",
                    "TERMINATED",
                    "UNKNOWN"
                }
            }
            namespace database {
                namespace availability {
                    /** Possible status for the availability */
                    enum StatusEnum {
                        "BETA",
                        "DEPRECATED",
                        "STABLE"
                    }
                }
                namespace backup {
                    /** Cloud database backup region definition */
                    interface Region {
                        /** Name of the region where the backup is stored */
                        name: string;
                    }
                }
                namespace capabilities {
                    namespace advancedConfiguration {
                        namespace property {
                            /** Possible type of the advanced configuration properties */
                            enum TypeEnum {
                                "boolean",
                                "double",
                                "long",
                                "string"
                            }
                        } /** Specific database engine capability */
                        interface Property {
                            /** Description of the property */
                            description: string;
                            /** Maximum value for the property if numeric and applicable */
                            maximum ? : double;
                            /** Minimum value for the property if numeric and applicable */
                            minimum ? : double;
                            /** Property name */
                            name: string;
                            /** Data type of the property */
                            type: cloud.project.database.capabilities.advancedConfiguration.property.TypeEnum;
                            /** Possible values for the property if string and applicable */
                            values ? : string[];
                        }
                    }
                    namespace engine {
                        namespace storage {
                            /** Possible storage strategy for an engine */
                            enum StrategyEnum {
                                "distributed",
                                "n/a",
                                "replicated"
                            }
                        }
                    }
                    namespace integration {
                        namespace parameter {
                            /** Possible type of an integration capability parameter */
                            enum TypeEnum {
                                "integer",
                                "string"
                            }
                        } /** Integration capability parameter */
                        interface Parameter {
                            /** Name of the integration parameter */
                            name: string;
                            /** Type of the integration parameter */
                            type: cloud.project.database.capabilities.integration.parameter.TypeEnum;
                        }
                    } /** Specific database engine capability */
                    interface Engine {
                        /** Default version used for the engine */
                        defaultVersion: string;
                        /** Description of the engine */
                        description: string;
                        /** Engine name */
                        name: string;
                        /** SSL modes for this engine */
                        sslModes: string[];
                        /** Storage strategy of the engine */
                        storage: cloud.project.database.capabilities.engine.storage.StrategyEnum;
                        /** Versions available for this engine */
                        versions: string[];
                    }
                    /** Cloud Database flavor definition */
                    interface Flavor {
                        /** Flavor core number */
                        core: number;
                        /** Flavor ram size in GB */
                        memory: number;
                        /** Name of the flavor */
                        name: string;
                        /** Flavor disk size in GB */
                        storage: number;
                    }
                    /** Integration capability between database engines */
                    interface Integration {
                        /** Destination engine for the integration */
                        destinationEngine: cloud.project.database.EngineEnum;
                        /** Parameters for the integration capability */
                        parameters ? : cloud.project.database.capabilities.integration.Parameter[];
                        /** Source engine for the integration */
                        sourceEngine: cloud.project.database.EngineEnum;
                        /** Type of the integration */
                        type: cloud.project.database.service.integration.TypeEnum;
                    }
                    /** Cloud Database option definition */
                    interface Option {
                        /** Name of the option */
                        name: string;
                        /** Type of the option */
                        type: cloud.project.database.TypeEnum;
                    }
                    /** Cloud Database plan definition */
                    interface Plan {
                        /** Automatic backup retention duration */
                        backupRetention: duration;
                        /** Description of the plan */
                        description: string;
                        /** Name of the plan */
                        name: string;
                    }
                }
                namespace kafka {
                    namespace user {
                        /** Cloud databases kafka user access definition */
                        interface Access {
                            /** User cert */
                            cert: text;
                            /** User key for the cert */
                            key: string;
                        }
                    } /** Cloud databases kafka acl definition */
                    interface Acl {
                        /** Acl ID */
                        id: string;
                        /** Permission to give to this username on this topic */
                        permission: string;
                        /** Topic affected by this acl */
                        topic: string;
                        /** Username affected by this acl */
                        username: string;
                    }
                    /** Cloud databases kafka permissions definition */
                    interface Permissions {
                        /** Names of the permissions */
                        names: string[];
                    }
                    /** Cloud database kafka service definition */
                    interface Service {
                        /** Time on which backups start every day */
                        backupTime: string;
                        /** Date of the creation of the cluster */
                        createdAt: string;
                        /** Description of the cluster */
                        description: string;
                        /** Disk attributes of the cluster */
                        disk: cloud.project.database.service.Disk;
                        /** List of all endpoints of the service */
                        endpoints: cloud.project.database.service.Endpoint[];
                        /** Name of the engine of the service */
                        engine: cloud.project.database.EngineEnum;
                        /** The VM flavor used for this cluster */
                        flavor: string;
                        /** Service ID */
                        id: string;
                        /** IP Blocks authorized to access to the cluster */
                        ipRestrictions: cloud.project.database.service.IpRestriction[];
                        /** Time on which maintenances can start every day */
                        maintenanceTime: string;
                        /** Private network ID in which the cluster is */
                        networkId ? : string;
                        /** Type of network of the cluster */
                        networkType: cloud.project.database.NetworkTypeEnum;
                        /** Number of nodes in the cluster */
                        nodeNumber: number;
                        /** Plan of the cluster */
                        plan: string;
                        /** Defines whether the REST API is enabled on the cluster */
                        restApi: boolean;
                        /** Defines whether the schema registry is enabled on the cluster */
                        schemaRegistry: boolean;
                        /** Current status of the cluster */
                        status: cloud.project.database.StatusEnum;
                        /** Private subnet ID in which the cluster is */
                        subnetId ? : string;
                        /** Version of the engine deployed on the cluster */
                        version: string;
                    }
                    /** Cloud database kafka topic definition */
                    interface Topic {
                        /** Topic ID */
                        id: string;
                        /** Minimum insync replica accepted for this topic */
                        minInsyncReplicas: number;
                        /** Name of the topic */
                        name: string;
                        /** Number of partitions for this topic */
                        partitions: number;
                        /** Number of replication for this topic */
                        replication: number;
                        /** Number of bytes for the retention of the data for this topic */
                        retentionBytes: number;
                        /** Number of hours for the retention of the data for this topic */
                        retentionHours: number;
                    }
                    /** Cloud database kafka topic creation definition */
                    interface TopicCreation {
                        /** Topic ID */
                        id: string;
                        /** Minimum insync replica accepted for this topic */
                        minInsyncReplicas: number;
                        /** Name of the topic */
                        name: string;
                        /** Number of partitions for this topic */
                        partitions: number;
                        /** Number of replication for this topic */
                        replication: number;
                        /** Number of bytes for the retention of the data for this topic */
                        retentionBytes: number;
                        /** Number of hours for the retention of the data for this topic */
                        retentionHours: number;
                    }
                }
                namespace kafkaConnect {
                    namespace capabilities {
                        namespace connector {
                            namespace configuration {
                                /** KafkaConnect connector config property definition */
                                interface Property {
                                    /** Defines the default value is exists */
                                    defaultValue ? : string;
                                    /** Description of the property */
                                    description: string;
                                    /** Pretty name of the property */
                                    displayName: string;
                                    /** Group to which belongs the property */
                                    group: string;
                                    /** Importance of the property */
                                    importance: cloud.project.database.kafkaConnect.capabilities.connector.property.ImportanceEnum;
                                    /** Name of the property */
                                    name: string;
                                    /** Defines whether the property is required */
                                    required: boolean;
                                    /** Type of data of the property */
                                    type: cloud.project.database.kafkaConnect.connector.property.TypeEnum;
                                    /** Possible values for the property if string and applicable */
                                    values ? : string[];
                                }
                            }
                            namespace property {
                                /** Possible importance for the kafka connectors properties */
                                enum ImportanceEnum {
                                    "high",
                                    "low",
                                    "medium"
                                }
                            } /** KafkaConnect connector transform definition */
                            interface Transform {
                                /** Description of the transform */
                                description: string;
                                /** Pretty name of the transform */
                                displayName: string;
                                /** Name of the transform */
                                name: string;
                                /** Defines whether the transform is required */
                                required: boolean;
                                /** Transform type this transform relates to */
                                transformType: string;
                                /** Type of data of the transform */
                                type: cloud.project.database.kafkaConnect.connector.property.TypeEnum;
                                /** Possible values for the transform if applicable */
                                values ? : string[];
                            }
                            /** Possible types for the kafka connectors */
                            enum TypeEnum {
                                "sink",
                                "source"
                            }
                        } /** KafkaConnect connector capability definition */
                        interface Connector {
                            /** Name of the connector's author */
                            author: string;
                            /** URL of the official documentation of the connector */
                            documentationUrl: string;
                            /** Connector ID */
                            id: string;
                            /** Defines whether this connector and version is the latest available */
                            latest: boolean;
                            /** Name of the connector */
                            name: string;
                            /** Defines whether the connector is in preview */
                            preview: boolean;
                            /** Type of connector */
                            type: cloud.project.database.kafkaConnect.capabilities.connector.TypeEnum;
                            /** Version of the connector */
                            version: string;
                        }
                    }
                    namespace connector {
                        namespace property {
                            /** Possible types for the kafka connectors properties */
                            enum TypeEnum {
                                "boolean",
                                "class",
                                "double",
                                "int16",
                                "int32",
                                "int64",
                                "list",
                                "password",
                                "string",
                                "transform"
                            }
                        }
                        namespace task {
                            /** Possible state of connector task */
                            enum StatusEnum {
                                "FAILED",
                                "PAUSED",
                                "RUNNING"
                            }
                        } /** Possible state of connector */
                        enum StatusEnum {
                            "CREATING",
                            "FAILED",
                            "PAUSED",
                            "RUNNING",
                            "UNASSIGNED"
                        }
                        /** KafkaConnect connector definition */
                        interface Task {
                            /** Task ID */
                            id: number;
                            /** Status of the task */
                            status: cloud.project.database.kafkaConnect.connector.task.StatusEnum;
                            /** Trace of the task */
                            trace: text;
                        }
                    } /** KafkaConnect connector definition */
                    interface Connector {
                        /** Configuration of the connector */
                        configuration: Record < string,
                        string > ;
                        /** Connector capability ID */
                        connectorId: string;
                        /** Connector ID */
                        id: string;
                        /** Name of the connector */
                        name: string;
                        /** Status of the connector */
                        status: cloud.project.database.kafkaConnect.connector.StatusEnum;
                    }
                    /** KafkaConnect connector definition */
                    interface ConnectorCreation {
                        /** Configuration of the connector */
                        configuration: Record < string,
                        string > ;
                        /** Connector capability ID */
                        connectorId: string;
                        /** Name of the connector */
                        name: string;
                    }
                }
                namespace m3db {
                    namespace namespace {
                        /** M3db namespace retention definition */
                        interface Retention {
                            /** Controls how long we wait before expiring stale data */
                            blockDataExpirationDuration ? : duration;
                            /** Controls how long to keep a block in memory before flushing to a fileset on disk */
                            blockSizeDuration ? : duration;
                            /** Controls how far into the future writes to the namespace will be accepted */
                            bufferFutureDuration ? : duration;
                            /** Controls how far into the past writes to the namespace will be accepted */
                            bufferPastDuration ? : duration;
                            /** Controls the duration of time that M3DB will retain data for the namespace */
                            periodDuration: duration;
                        }
                        /** Possible type of the service integration */
                        enum TypeEnum {
                            "aggregated",
                            "unaggregated"
                        }
                    } /** M3db Namespace definition */
                    interface Namespace {
                        /** Namespace ID */
                        id: string;
                        /** Name of the namespace */
                        name: string;
                        /** Resolution for an aggregated namespace */
                        resolution ? : duration;
                        /** Retention configuration */
                        retention: cloud.project.database.m3db.namespace.Retention;
                        /** Defines whether M3db will create snapshot files for this namespace */
                        snapshotEnabled: boolean;
                        /** Type of namespace */
                        type: cloud.project.database.m3db.namespace.TypeEnum;
                        /** Defines whether M3db will include writes to this namespace in the commit log */
                        writesToCommitLogEnabled: boolean;
                    }
                    /** M3db Namespace creation definition */
                    interface NamespaceCreation {
                        /** Namespace ID */
                        id: string;
                        /** Name of the namespace */
                        name: string;
                        /** Resolution for an aggregated namespace */
                        resolution: duration;
                        /** Retention configuration */
                        retention: cloud.project.database.m3db.namespace.Retention;
                        /** Defines whether M3db will create snapshot files for this namespace */
                        snapshotEnabled: boolean;
                        /** Type of namespace */
                        type: cloud.project.database.m3db.namespace.TypeEnum;
                        /** Defines whether M3db will include writes to this namespace in the commit log */
                        writesToCommitLogEnabled: boolean;
                    }
                    /** M3db User definition */
                    interface User {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** Group of the user */
                        group: string;
                        /** User ID */
                        id: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User creation definition */
                    interface UserCreation {
                        /** Group of the user */
                        group: string;
                        /** Name of the user */
                        name: string;
                    }
                    /** M3db User definition */
                    interface UserWithPassword {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** Group of the user */
                        group: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                }
                namespace mysql {
                    namespace querystatistics {
                        /** Cloud database mysql single query statistic definition */
                        interface Query {
                            /** Average wait time of the summarized timed events */
                            avgTimerWait: number;
                            /** Number of summarized events. This value includes all events, whether timed or nontimed */
                            countStar: number;
                            /** Digest of the summarized events */
                            digest: string;
                            /** Text of the summarized digest events */
                            digestText: text;
                            /** First appearance of the events */
                            firstSeen: string;
                            /** Last appearance of the events */
                            lastSeen: string;
                            /** Maximum wait time of the summarized timed events */
                            maxTimerWait: number;
                            /** Mininum wait time of the summarized timed events */
                            minTimerWait: number;
                            /** 95th percentile of the statement latency, in picoseconds */
                            quantile95: number;
                            /** 99th percentile of the statement latency, in picoseconds */
                            quantile99: number;
                            /** 99.9th percentile of the statement latency, in picoseconds */
                            quantile999: number;
                            /** Datetime when the querySampleText column was seen */
                            querySampleSeen: string;
                            /** Sample SQL statement that produces the digest value in the row */
                            querySampleText: text;
                            /** Wait time for the sample statement in the querySampleText column */
                            querySampleTimerWait: number;
                            /** SchemaName of the summarized events */
                            schemaName: string;
                            /** Number of internal on-disk temporary tables created */
                            sumCreatedTmpDiskTables: number;
                            /** Number of internal temporary tables created */
                            sumCreatedTmpTables: number;
                            /** Number of errors */
                            sumErrors: number;
                            /** Sum of lock time of the summarized timed events */
                            sumLockTime: number;
                            /** Sum of not good indexes of the summarized timed events */
                            sumNoGoodIndexUsed: number;
                            /** Sum of no indexes of the summarized timed events */
                            sumNoIndexUsed: number;
                            /** Sum of rows affected of the summarized timed events */
                            sumRowsAffected: number;
                            /** Sum of rows examined of the summarized timed events */
                            sumRowsExamined: number;
                            /** Sum of rows sent of the summarized timed events */
                            sumRowsSent: number;
                            /** Sum of select full join of the summarized timed events */
                            sumSelectFullJoin: number;
                            /** Sum of select full range join of the summarized timed events */
                            sumSelectFullRangeJoin: number;
                            /** Sum of select range of the summarized timed events */
                            sumSelectRange: number;
                            /** Sum of select range check of the summarized timed events */
                            sumSelectRangeCheck: number;
                            /** Sum of select scan of the summarized timed events */
                            sumSelectScan: number;
                            /** Sum of sorted merge passes of the summarized timed events */
                            sumSortMergePasses: number;
                            /** Sum of sorted range of the summarized timed events */
                            sumSortRange: number;
                            /** Sum of sorted rows of the summarized timed events */
                            sumSortRows: number;
                            /** Sum of sort scan of the summarized timed events */
                            sumSortScan: number;
                            /** Sum of wait time of the summarized timed events */
                            sumTimerWait: number;
                            /** Number of warnings */
                            sumWarnings: number;
                        }
                    } /** Cloud database mysql query statistics response body definition */
                    interface QueryStatistics {
                        /** Statistics of the queries */
                        queries: cloud.project.database.mysql.querystatistics.Query[];
                    }
                }
                namespace opensearch {
                    /** Cloud database opensearch index definition */
                    interface Index {
                        /** Date of the creation of the index */
                        createdAt: string;
                        /** Number of documents hold by the index */
                        documents: number;
                        /** Index ID */
                        id: string;
                        /** Name of the index */
                        name: string;
                        /** Number of replicas of the index */
                        replicasNumber: number;
                        /** Number of shards of the index */
                        shardsNumber: number;
                        /** Size of the index */
                        size: number;
                    }
                    /** Cloud database opensearch pattern definition */
                    interface Pattern {
                        /** Pattern ID */
                        id: string;
                        /** Maximum number of index for this pattern */
                        maxIndexCount: number;
                        /** Pattern format */
                        pattern: string;
                    }
                    /** Cloud database opensearch permissions definition */
                    interface Permissions {
                        /** Possible values for the permissions */
                        names: string[];
                    }
                    /** Cloud database opensearch service definition */
                    interface Service {
                        /** Defines whether the acls are enabled on the cluster */
                        aclsEnabled: boolean;
                        /** Time on which backups start every day. DEPRECATED: use backups.time */
                        backupTime: string;
                        /** Information related to the backups, null if the engine does not support backups */
                        backups ? : cloud.project.database.service.Backup;
                        /** Date of the creation of the cluster */
                        createdAt: string;
                        /** Description of the cluster */
                        description: string;
                        /** Disk attributes of the cluster */
                        disk: cloud.project.database.service.Disk;
                        /** List of all endpoints of the service */
                        endpoints: cloud.project.database.service.Endpoint[];
                        /** Name of the engine of the service */
                        engine: cloud.project.database.EngineEnum;
                        /** The VM flavor used for this cluster */
                        flavor: string;
                        /** Service ID */
                        id: string;
                        /** IP Blocks authorized to access to the cluster */
                        ipRestrictions: cloud.project.database.service.IpRestriction[];
                        /** Time on which maintenances can start every day */
                        maintenanceTime: string;
                        /** Private network ID in which the cluster is */
                        networkId ? : string;
                        /** Type of network of the cluster */
                        networkType: cloud.project.database.NetworkTypeEnum;
                        /** Number of nodes in the cluster */
                        nodeNumber: number;
                        /** Plan of the cluster */
                        plan: string;
                        /** Current status of the cluster */
                        status: cloud.project.database.StatusEnum;
                        /** Private subnet ID in which the cluster is */
                        subnetId ? : string;
                        /** Version of the engine deployed on the cluster */
                        version: string;
                    }
                    /** Opensearch user definition */
                    interface User {
                        /** Acls of the user */
                        acls: cloud.project.database.opensearch.UserAcl[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** Opensearch user acl definition */
                    interface UserAcl {
                        /** Pattern of the ACL */
                        pattern: string;
                        /** Permission of the ACL */
                        permission: string;
                    }
                    /** Opensearch user creation definition */
                    interface UserCreation {
                        /** Acls of the user */
                        acls: cloud.project.database.opensearch.UserAcl[];
                        /** Name of the user */
                        name: string;
                    }
                    /** Opensearch user definition */
                    interface UserWithPassword {
                        /** Acls of the user */
                        acls: cloud.project.database.opensearch.UserAcl[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                }
                namespace postgresql {
                    namespace connectionpool {
                        /** Possible modes for the connection pools */
                        enum ModeEnum {
                            "session",
                            "statement",
                            "transaction"
                        }
                        /** Possible ssl modes for the connection pools */
                        enum SslModeEnum {
                            "require"
                        }
                    }
                    namespace querystatistics {
                        /** Cloud database postgresql single query statistic definition */
                        interface Query {
                            /** Time spent reading data file blocks by backends in this database, in milliseconds */
                            blkReadTime: double;
                            /** Time spent writing data file blocks by backends in this database, in milliseconds */
                            blkWriteTime: double;
                            /** Number of times this function has been called */
                            calls: number;
                            /** Name of the database */
                            databaseName: string;
                            /** Total number of local blocks dirtied by the statement */
                            localBlksDirtied: number;
                            /** Total number of local block cache hits by the statement */
                            localBlksHit: number;
                            /** Total number of local blocks read by the statement */
                            localBlksRead: number;
                            /** Total number of local blocks written by the statement */
                            localBlksWritten: number;
                            /** Maximum time spent planning the statement, in milliseconds */
                            maxPlanTime: double;
                            /** Maximum time spent for the statement, in milliseconds */
                            maxTime: double;
                            /** Mean time spent planning the statement, in milliseconds */
                            meanPlanTime: double;
                            /** Mean time spent for the statement, in milliseconds */
                            meanTime: double;
                            /** Minimum time spent planning the statement, in milliseconds */
                            minPlanTime: double;
                            /** Minimum time spent for the statement, in milliseconds */
                            minTime: double;
                            /** Text of a representative statement */
                            query: text;
                            /** Total number of rows retrieved or affected by the statement */
                            rows: number;
                            /** Total number of shared blocks dirtied by the statement */
                            sharedBlksDirtied: number;
                            /** Total number of shared block cache hits by the statement */
                            sharedBlksHit: number;
                            /** Total number of shared blocks read by the statement */
                            sharedBlksRead: number;
                            /** Total number of shared blocks written by the statement */
                            sharedBlksWritten: number;
                            /** Population standard deviation of time spent planning the statement, in milliseconds */
                            stddevPlanTime: double;
                            /** Population standard deviation of time spent for the statement, in milliseconds */
                            stddevTime: double;
                            /** Total number of temp blocks read by the statement */
                            tempBlksRead: number;
                            /** Total number of temp blocks written by the statement */
                            tempBlksWritten: number;
                            /** Total time spent planning the statement, in milliseconds */
                            totalPlanTime: double;
                            /** Total time spent for the statement, in milliseconds */
                            totalTime: double;
                            /** Name of the user who executed the statement */
                            username: string;
                            /** Total amount of WAL generated by the statement in bytes */
                            walBytes: complexType.UnitAndValue < long > ;
                            /** Total number of WAL full page images generated by the statement */
                            walFpi: number;
                            /** Total number of WAL records generated by the statement */
                            walRecords: number;
                        }
                    } /** Cloud database postgresql connection pool response body definition */
                    interface ConnectionPool {
                        /** Database used for the connection pool */
                        databaseId: string;
                        /** ID of the connection pool */
                        id: string;
                        /** Connection mode to the connection pool */
                        mode: cloud.project.database.postgresql.connectionpool.ModeEnum;
                        /** Name of the connection pool */
                        name: string;
                        /** Port of the connection pool */
                        port: number;
                        /** Size of the connection pool */
                        size: number;
                        /** Ssl connection mode for the pool */
                        sslMode ? : cloud.project.database.postgresql.connectionpool.SslModeEnum;
                        /** Connection URI to the pool */
                        uri: string;
                        /** User authorized to connect to the pool, if none all the users are allowed */
                        userId ? : string;
                    }
                    /** Cloud database postgresql connection pool creation body definition */
                    interface ConnectionPoolCreation {
                        /** Database used for the connection pool */
                        databaseId: string;
                        /** Connection mode to the connection pool */
                        mode: cloud.project.database.postgresql.connectionpool.ModeEnum;
                        /** Name of the connection pool */
                        name: string;
                        /** Size of the connection pool */
                        size: number;
                        /** User authorized to connect to the pool, if none all the users are allowed */
                        userId ? : string;
                    }
                    /** Cloud database postgresql query statistics response body definition */
                    interface QueryStatistics {
                        /** Statistics of the queries */
                        queries: cloud.project.database.postgresql.querystatistics.Query[];
                    }
                }
                namespace redis {
                    /** Redis user definition */
                    interface User {
                        /** Categories of the user */
                        categories: string[];
                        /** Channels of the user */
                        channels: string[];
                        /** Commands of the user */
                        commands: string[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Keys of the user */
                        keys: string[];
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** Redis user definition */
                    interface UserCreation {
                        /** Categories of the user */
                        categories: string[];
                        /** Channels of the user */
                        channels: string[];
                        /** Commands of the user */
                        commands: string[];
                        /** Keys of the user */
                        keys: string[];
                        /** Name of the user */
                        name: string;
                    }
                    /** Redis user with password definition */
                    interface UserWithPassword {
                        /** Categories of the user */
                        categories: string[];
                        /** Channels of the user */
                        channels: string[];
                        /** Commands of the user */
                        commands: string[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Keys of the user */
                        keys: string[];
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                }
                namespace service {
                    namespace creation {
                        /** Defines the source to fork a cluster from a backup. DEPRECATED: use forkFrom */
                        interface BackupFork {
                            /** Backup ID (not compatible with pointInTime) */
                            id: string;
                            /** Point in time to restore from (not compatible with id) */
                            pointInTime: string;
                            /** Service ID to which the backups belong to */
                            serviceId: string;
                        }
                        /** Defines the source to fork a cluster from a backup */
                        interface ForkFrom {
                            /** Backup ID (not compatible with pointInTime) */
                            backupId: string;
                            /** Point in time to restore from (not compatible with id) */
                            pointInTime: string;
                            /** Service ID to which the backups belong to */
                            serviceId: string;
                        }
                    }
                    namespace currentqueries {
                        namespace query {
                            /** Cloud database service current queries query cancel request */
                            interface CancelRequest {
                                /** Database server connection ID */
                                pid: number;
                                /** Request immediate termination instead of soft cancel */
                                terminate: boolean;
                            }
                            /** Cloud database service current queries query cancel response */
                            interface CancelResponse {
                                /** Status reported by the database server */
                                success: boolean;
                            }
                        } /** Cloud database service current queries query definition */
                        interface Query {
                            /** Application name */
                            applicationName: string;
                            /** Backend start timestamp */
                            backendStart ? : string;
                            /** Backend type */
                            backendType ? : string;
                            /** XID for current backend */
                            backendXid ? : number;
                            /** Xmin for current backend */
                            backendXmin ? : number;
                            /** Client hostname */
                            clientHostname ? : string;
                            /** Client ip address */
                            clientIp ? : string;
                            /** Client port */
                            clientPort ? : number;
                            /** Database ID */
                            databaseId ? : number;
                            /** Database name */
                            databaseName: string;
                            /** Leader process ID */
                            leaderPid ? : number;
                            /** Connection process ID */
                            pid: number;
                            /** Current query running on this connection */
                            query: string;
                            /** Duration of the query in seconds */
                            queryDuration: double;
                            /** Query start timestamp */
                            queryStart ? : string;
                            /** Connection state */
                            state: cloud.project.database.service.currentqueries.StateEnum;
                            /** Connection state change timestamp */
                            stateChange ? : string;
                            /** Transaction start timestamp */
                            transactionStart ? : string;
                            /** User ID */
                            userId ? : number;
                            /** User name */
                            userName: string;
                            /** Connection wait event */
                            waitEvent ? : string;
                            /** Connection wait event type */
                            waitEventType ? : cloud.project.database.service.currentqueries.WaitEventTypeEnum;
                        }
                        /** Possible state of a query */
                        enum StateEnum {
                            "ACTIVE",
                            "DISABLED",
                            "FASTPATH_FUNCTION_CALL",
                            "IDLE",
                            "IDLE_IN_TRANSACTION",
                            "IDLE_IN_TRANSACTION_ABORTED"
                        }
                        /** Possible event type on which the backend is waiting */
                        enum WaitEventTypeEnum {
                            "ACTIVITY",
                            "BUFFER_PIN",
                            "CLIENT",
                            "EXTENSION",
                            "IO",
                            "IPC",
                            "LOCK",
                            "LWLOCK",
                            "TIMEOUT"
                        }
                    }
                    namespace endpoint {
                        /** Defines all the values for the component in the service endpoints */
                        enum ComponentEnum {
                            "cassandra",
                            "grafana",
                            "graphite",
                            "influxdb",
                            "kafka",
                            "kafkaConnect",
                            "kafkaRestApi",
                            "kafkaSASL",
                            "kafkaSchemaRegistry",
                            "kibana",
                            "m3coordinator",
                            "mongodb",
                            "mongodbAnalytics",
                            "mongodbSrv",
                            "mongodbSrvAnalytics",
                            "mysql",
                            "mysqlRead",
                            "mysqlx",
                            "opensearch",
                            "postgresql",
                            "postgresqlRead",
                            "postgresqlReadReplica",
                            "prometheusRead",
                            "prometheusWrite",
                            "redis"
                        }
                    }
                    namespace integration {
                        /** Possible state of the integration */
                        enum StatusEnum {
                            "READY"
                        }
                        /** Possible type of the service integration */
                        enum TypeEnum {
                            "grafanaDashboard",
                            "grafanaDatasource",
                            "kafkaConnect",
                            "kafkaLogs",
                            "kafkaMirrorMaker",
                            "m3aggregator",
                            "m3dbMetrics",
                            "opensearchLogs",
                            "postgresqlMetrics"
                        }
                    }
                    namespace maintenance {
                        /** Possible status of a service maintenance */
                        enum StatusEnum {
                            "APPLIED",
                            "APPLYING",
                            "ERROR",
                            "PENDING",
                            "SCHEDULED"
                        }
                    }
                    namespace node {
                        /** Node role values */
                        enum RoleEnum {
                            "ANALYTICS",
                            "STANDARD"
                        }
                    }
                    namespace replication {
                        /** Possible type of the service integration */
                        enum PolicyClassEnum {
                            "org.apache.kafka.connect.mirror.DefaultReplicationPolicy",
                            "org.apache.kafka.connect.mirror.IdentityReplicationPolicy"
                        }
                    } /** Cloud database service backups definition */
                    interface Backup {
                        /** Regions on which the backups are stored */
                        regions: string[];
                        /** Time on which backups start every day */
                        time: string;
                    }
                    /** Certificates definition for cloud project databases */
                    interface Certificates {
                        /** CA certificate used for the service */
                        ca: text;
                    }
                    /** Cloud database current queries */
                    interface CurrentQueries {
                        /** Current queries list */
                        queries: cloud.project.database.service.currentqueries.Query[];
                    }
                    /** A single value from a metric */
                    interface DataPoint {
                        /** Timestamp in seconds since epoch time */
                        timestamp: number;
                        /** Value of this datapoint */
                        value: double;
                    }
                    /** Defines the database object in a cluster */
                    interface Database {
                        /** Defines if the database has been created by default */
                        default: boolean;
                        /** Database ID */
                        id: string;
                        /** Database name */
                        name: string;
                    }
                    /** Defines the disk attributes of a service */
                    interface Disk {
                        /** Service disk size  */
                        size: number;
                        /** Service disk size  */
                        type: string;
                    }
                    /** Defines the endpoint object in a cluster */
                    interface Endpoint {
                        /** Type of component the URI relates to */
                        component: cloud.project.database.service.endpoint.ComponentEnum;
                        /** Domain of the cluster */
                        domain: string;
                        /** Path of the endpoint */
                        path ? : string;
                        /** Connection port for the endpoint */
                        port ? : number;
                        /** Scheme used to generate the URI */
                        scheme ? : string;
                        /** Defines whether the endpoint uses SSL */
                        ssl: boolean;
                        /** SSL mode used to connect to the service if the SSL is enabled */
                        sslMode ? : string;
                        /** URI of the endpoint */
                        uri ? : string;
                    }
                    /** Metrics datapoints from a specific host */
                    interface HostMetric {
                        /** List of metric's samples */
                        dataPoints: cloud.project.database.service.DataPoint[];
                        /** Name of the originating host */
                        hostname: string;
                    }
                    /** Cloud database service integration definition */
                    interface Integration {
                        /** ID of the destination service */
                        destinationServiceId: string;
                        /** Service ID */
                        id: string;
                        /** Parameters for the integration */
                        parameters ? : Record < string,
                        string > ;
                        /** ID of the source service */
                        sourceServiceId: string;
                        /** Current status of the integration */
                        status: cloud.project.database.service.integration.StatusEnum;
                        /** Type of the integration */
                        type: cloud.project.database.service.integration.TypeEnum;
                    }
                    /** Ip Restriction definition for cloud project databases */
                    interface IpRestriction {
                        /** Description of the ip restriction */
                        description: string;
                        /** Whitelisted IP */
                        ip: string;
                        /** Current status of the ip restriction */
                        status: cloud.project.database.StatusEnum;
                    }
                    /** A single log entry */
                    interface LogEntry {
                        /** Host from which the log is coming from */
                        hostname: string;
                        /** The log message */
                        message: string;
                        /** Timestamp in seconds since epoch time */
                        timestamp: number;
                    }
                    /** Cloud database service maintenance definition */
                    interface Maintenance {
                        /** Date of the application of the maintenance */
                        appliedAt ? : string;
                        /** Description of the maintenance */
                        description: string;
                        /** ID of the maintenance */
                        id: string;
                        /** Date of the planification of the maintenance */
                        scheduledAt ? : string;
                        /** Status of the maintenance */
                        status: cloud.project.database.service.maintenance.StatusEnum;
                    }
                    /** Metric definition for cloud project databases */
                    interface Metric {
                        /** Metric values for each cluster's host */
                        metrics: cloud.project.database.service.HostMetric[];
                        /** Name of the metric */
                        name: string;
                        /** Unit of the metric */
                        units: cloud.project.database.service.MetricUnitEnum;
                    }
                    /** Supported metrics query period */
                    enum MetricPeriodEnum {
                        "lastDay",
                        "lastHour",
                        "lastMonth",
                        "lastWeek",
                        "lastYear"
                    }
                    /** Supported unit types for metrics */
                    enum MetricUnitEnum {
                        "BYTES",
                        "BYTES_PER_SECOND",
                        "GIGABYTES",
                        "GIGABYTES_PER_HOUR",
                        "MEGABYTES",
                        "MEGABYTES_PER_SECOND",
                        "MILLISECONDS",
                        "PERCENT",
                        "SCALAR",
                        "SCALAR_PER_SECOND",
                        "SECONDS",
                        "UNKNOWN"
                    }
                    /** Cloud databases cluster node definition */
                    interface Node {
                        /** Date of the creation of the node */
                        createdAt: string;
                        /** Flavor of the node */
                        flavor: string;
                        /** Node ID */
                        id: string;
                        /** Name of the node */
                        name: string;
                        /** Connection port for the node */
                        port: number;
                        /** Region of the node */
                        region: string;
                        /** Role of the node */
                        role ? : cloud.project.database.service.node.RoleEnum;
                        /** Current status of the node */
                        status: cloud.project.database.StatusEnum;
                    }
                    /** Cloud databases cluster new node definition */
                    interface NodeCreation {
                        /** Date of the creation of the node */
                        createdAt: string;
                        /** Flavor of the node */
                        flavor: string;
                        /** Node ID */
                        id: string;
                        /** Name of the node */
                        name: string;
                        /** Connection port for the node */
                        port: number;
                        /** Region of the node */
                        region: string;
                        /** Role of the node */
                        role ? : cloud.project.database.service.node.RoleEnum;
                        /** Current status of the node */
                        status: cloud.project.database.StatusEnum;
                    }
                    /** Node pattern definition */
                    interface NodePattern {
                        /** Flavor of the nodes */
                        flavor: string;
                        /** Number of nodes to create */
                        number: number;
                        /** Region of the nodes */
                        region: string;
                    }
                    /** Cloud database service replication definition */
                    interface Replication {
                        /** Defines whether heartbeats are emitted */
                        emitHeartbeats: boolean;
                        /** Defines whether the replication is actived */
                        enabled: boolean;
                        /** Service ID */
                        id: string;
                        /** ReplicationPolicyClass used for the replication */
                        replicationPolicyClass: cloud.project.database.service.replication.PolicyClassEnum;
                        /** ID of the integration source */
                        sourceIntegration: string;
                        /** Defines whether the group offsets must be sync */
                        syncGroupOffsets: boolean;
                        /** Defines the interval in second between 2 sync */
                        syncInterval: number;
                        /** ID of the integration target */
                        targetIntegration: string;
                        /** Patterns of the topics to exclude from the replication */
                        topicExcludeList: string[];
                        /** Patterns of the topics to replicate */
                        topics: string[];
                    }
                    /** Cloud database service replication definition */
                    interface ReplicationCreation {
                        /** Defines whether heartbeats are emitted */
                        emitHeartbeats: boolean;
                        /** Defines whether the replication is actived */
                        enabled: boolean;
                        /** ReplicationPolicyClass used for the replication */
                        replicationPolicyClass: cloud.project.database.service.replication.PolicyClassEnum;
                        /** ID of the integration source */
                        sourceIntegration: string;
                        /** Defines whether the group offsets must be sync */
                        syncGroupOffsets: boolean;
                        /** Defines the interval in second between 2 sync */
                        syncInterval: number;
                        /** ID of the integration target */
                        targetIntegration: string;
                        /** Patterns of the topics to exclude from the replication */
                        topicExcludeList: string[];
                        /** Patterns of the topics to replicate */
                        topics: string[];
                    }
                    /** Cloud database service restore specification */
                    interface Restore {
                        /** point in time to restore from */
                        pointInTime: string;
                    }
                    /** User definition */
                    interface User {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User creation definition */
                    interface UserCreation {
                        /** Name of the user */
                        name: string;
                    }
                    /** User with password definition */
                    interface UserWithPassword {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User with password definition */
                    interface UserWithPasswordAndRoles {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Roles the user belongs to */
                        roles: string[];
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User definition */
                    interface UserWithRoles {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Roles the user belongs to */
                        roles: string[];
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User creation definition */
                    interface UserWithRolesCreation {
                        /** Name of the user */
                        name: string;
                        /** Roles the user belongs to */
                        roles: string[];
                    }
                } /** Availability of databases engines on cloud projects */
                interface Availability {
                    /** Defines the type of backup */
                    backup: cloud.project.database.BackupTypeEnum;
                    /** Backup retention time of the availability in days */
                    backupRetentionDays: number;
                    /** Whether this availability can be used by default */
                    default: boolean;
                    /** End of life of the product */
                    endOfLife ? : string;
                    /** Database engine name */
                    engine: string;
                    /** Flavor name */
                    flavor: string;
                    /** Maximum possible disk size in GB */
                    maxDiskSize: number;
                    /** Maximum nodes of the cluster */
                    maxNodeNumber: number;
                    /** Minimum possible disk size in GB */
                    minDiskSize: number;
                    /** Minimum nodes of the cluster */
                    minNodeNumber: number;
                    /** Type of network */
                    network: cloud.project.database.NetworkTypeEnum;
                    /** Plan name */
                    plan: string;
                    /** Region name */
                    region: string;
                    /** Date of the release of the product */
                    startDate: string;
                    /** Status of the availability */
                    status: cloud.project.database.availability.StatusEnum;
                    /** Flex disk size step in GB */
                    stepDiskSize: number;
                    /** End of life of the upstream product */
                    upstreamEndOfLife ? : string;
                    /** Version name */
                    version: string;
                }
                /** Cloud database backup definition */
                interface Backup {
                    /** Date of the creation of the backup */
                    createdAt: string;
                    /** Description of the backup */
                    description: string;
                    /** Backup ID */
                    id: string;
                    /** Region where the backup is stored. DEPRECATED: use regions */
                    region: string;
                    /** Regions where the backup are stored */
                    regions: cloud.project.database.backup.Region[];
                    /** Size of the backup */
                    size: complexType.UnitAndValue < long > ;
                    /** Current status of the backup */
                    status: cloud.project.database.StatusEnum;
                    /** Type of backup */
                    type: cloud.project.database.BackupTypeEnum;
                }
                /** Type of backup for the cluster */
                enum BackupTypeEnum {
                    "automatic",
                    "manual"
                }
                /** Capabilities available for the databases engines on cloud projects */
                interface Capabilities {
                    /** Disks available */
                    disks: string[];
                    /** Database engines available */
                    engines: cloud.project.database.capabilities.Engine[];
                    /** Flavors available */
                    flavors: cloud.project.database.capabilities.Flavor[];
                    /** Options available */
                    options: cloud.project.database.capabilities.Option[];
                    /** Plans available */
                    plans: cloud.project.database.capabilities.Plan[];
                    /** Regions available */
                    regions: string[];
                }
                /** Possible names of the engines */
                enum EngineEnum {
                    "cassandra",
                    "grafana",
                    "kafka",
                    "kafkaConnect",
                    "kafkaMirrorMaker",
                    "m3aggregator",
                    "m3db",
                    "mongodb",
                    "mysql",
                    "opensearch",
                    "postgresql",
                    "redis"
                }
                /** Ip Restriction definition for cloud project databases (DEPRECATED) */
                interface IpRestriction {
                    /** Description of the ip restriction */
                    description: string;
                    /** Whitelisted IP */
                    ip: string;
                    /** Current status of the ip restriction */
                    status: cloud.project.database.StatusEnum;
                }
                /** Ip Restriction creation definition for cloud project databases (DEPRECATED) */
                interface IpRestrictionCreation {
                    /** Description of the ip restriction */
                    description: string;
                    /** Whitelisted IP */
                    ip: string;
                }
                /** Type of network in which the databases cluster are */
                enum NetworkTypeEnum {
                    "private",
                    "public"
                }
                /** Cloud database service definition */
                interface Service {
                    /** Time on which backups start every day. DEPRECATED: use backups.time */
                    backupTime: string;
                    /** Information related to the backups, null if the engine does not support backups */
                    backups ? : cloud.project.database.service.Backup;
                    /** Date of the creation of the cluster */
                    createdAt: string;
                    /** Description of the cluster */
                    description: string;
                    /** Disk attributes of the cluster */
                    disk: cloud.project.database.service.Disk;
                    /** List of all endpoints of the service */
                    endpoints: cloud.project.database.service.Endpoint[];
                    /** Name of the engine of the service */
                    engine: cloud.project.database.EngineEnum;
                    /** The VM flavor used for this cluster */
                    flavor: string;
                    /** Service ID */
                    id: string;
                    /** IP Blocks authorized to access to the cluster */
                    ipRestrictions: cloud.project.database.service.IpRestriction[];
                    /** Time on which maintenances can start every day */
                    maintenanceTime: string;
                    /** Private network ID in which the cluster is */
                    networkId ? : string;
                    /** Type of network of the cluster */
                    networkType: cloud.project.database.NetworkTypeEnum;
                    /** Number of nodes in the cluster */
                    nodeNumber: number;
                    /** Plan of the cluster */
                    plan: string;
                    /** Current status of the cluster */
                    status: cloud.project.database.StatusEnum;
                    /** Private subnet ID in which the cluster is */
                    subnetId ? : string;
                    /** Version of the engine deployed on the cluster */
                    version: string;
                }
                /** Cloud databases cluster definition */
                interface ServiceCreation {
                    /** Backup from which the new service is created. DEPRECATED: use forkFrom */
                    backup ? : cloud.project.database.service.creation.BackupFork;
                    /** Time on which backups start every day. DEPRECATED: use backups.time */
                    backupTime ? : string;
                    /** Information related to the backups, null if the engine does not support backups */
                    backups ? : cloud.project.database.service.Backup;
                    /** Description of the cluster */
                    description: string;
                    /** Disk attributes of the cluster */
                    disk: cloud.project.database.service.Disk;
                    /** Backup from which the new service is created */
                    forkFrom ? : cloud.project.database.service.creation.ForkFrom;
                    /** IP Blocks authorized to access to the cluster */
                    ipRestrictions: cloud.project.database.service.IpRestriction[];
                    /** Time on which maintenances can start every day */
                    maintenanceTime ? : string;
                    /** Private network ID in which the cluster is */
                    networkId ? : string;
                    /** List of nodes in the cluster, not compatible with nodesPattern */
                    nodesList ? : cloud.project.database.service.NodeCreation[];
                    /** Pattern definition of the nodes in the cluster, not compatible with nodesList */
                    nodesPattern ? : cloud.project.database.service.NodePattern;
                    /** Plan of the cluster */
                    plan: string;
                    /** Private subnet ID in which the cluster is */
                    subnetId ? : string;
                    /** Version of the engine deployed on the cluster */
                    version: string;
                }
                /** Possible state of the job */
                enum StatusEnum {
                    "CREATING",
                    "DELETING",
                    "ERROR",
                    "ERROR_INCONSISTENT_SPEC",
                    "LOCKED",
                    "LOCKED_PENDING",
                    "LOCKED_UPDATING",
                    "PENDING",
                    "READY",
                    "UPDATING"
                }
                /** Cloud databases temporary write deadline definition */
                interface TemporaryWriteDeadline {
                    /** Date on which the temporary write permissions would be lifted */
                    until: string;
                }
                /** Type of data returned in the capabilities options */
                enum TypeEnum {
                    "boolean",
                    "double",
                    "duration",
                    "long",
                    "string"
                }
            }
            namespace floatingIp {
                namespace associatedEntity {
                    /** Type of the associated entity */
                    enum TypeEnum {
                        "dhcp",
                        "instance",
                        "loadbalancer",
                        "routerInterface",
                        "unknown"
                    }
                } /** Associated entity with a floating ip */
                interface AssociatedEntity {
                    /** ID of the gateway */
                    gatewayId: string;
                    /** ID of the port */
                    id: string;
                    /** IP of the port */
                    ip: string;
                    /** Type of the port */
                    type: cloud.project.floatingIp.associatedEntity.TypeEnum;
                }
                /** Status of a floating ip */
                enum StatusEnum {
                    "active",
                    "down",
                    "error"
                }
            }
            namespace io {
                namespace stream {
                    /** Region information */
                    interface Region {
                        /** Endpoint of the region */
                        endpoint: cloud.project.io.stream.RegionEndpoint;
                        /** Region name */
                        region: string;
                    }
                    /** Region information */
                    interface RegionEndpoint {
                        /** Pulsar endpoint of the stream */
                        pulsar: string;
                    }
                    /** Create a consumer on a stream */
                    interface Subscription {
                        /** ID of the subscription */
                        id: string;
                        /** Kind of the subscription */
                        kind: cloud.project.io.stream.SubscriptionKindEnum;
                        /** Name of the subscription */
                        name: string;
                    }
                    /** Create a subscription on a stream */
                    interface SubscriptionCreation {
                        /** Name of the subscription */
                        name: string;
                    }
                    /** Kind of the subscription */
                    enum SubscriptionKindEnum {
                        "EXCLUSIVE",
                        "FAILOVER",
                        "KEY_SHARED",
                        "SHARED"
                    }
                    /** Get statistic of a subscription */
                    interface SubscriptionStats {
                        /** Messages waiting to be consumed */
                        lag: number;
                    }
                    /** Token to access a stream */
                    interface Token {
                        /** Action of the token */
                        action: cloud.project.io.stream.TokenActionEnum;
                        /** ID of the token */
                        id: string;
                        /** Access token */
                        token: string;
                    }
                    /** Action of the token */
                    enum TokenActionEnum {
                        "BOTH",
                        "CONSUME",
                        "PRODUCE"
                    }
                    /** Create a token to access a stream */
                    interface TokenCreation {
                        /** Action of the token */
                        action: cloud.project.io.stream.TokenActionEnum;
                    }
                } /** A stream to send data */
                interface Stream {
                    /** Backlog of the stream in RFC3339 (duration) */
                    backlog: duration;
                    /** Description of the stream */
                    description ? : string;
                    /** ID of the stream */
                    id: string;
                    /** Kind of persistence for the stream. */
                    kind: cloud.project.io.StreamKindEnum;
                    /** Name of the stream */
                    name: string;
                    /** Regions where the stream is available */
                    regions: string[];
                    /** Retention of the stream in RFC3339 (duration) */
                    retention: duration;
                    /** Status of the stream. */
                    status: cloud.project.io.StreamStatusEnum;
                    /** Throttling of the stream (number of message allowed per second for the stream) */
                    throttling: number;
                }
                /** Create a stream of data */
                interface StreamCreation {
                    /** Description of the stream */
                    description: string;
                    /** Kind of the stream */
                    kind: cloud.project.io.StreamKindEnum;
                    /** Name of the stream */
                    name: string;
                    /** Region where the stream will be available */
                    region: string;
                }
                /** Kind of persistence for the stream */
                enum StreamKindEnum {
                    "NON_PERSISTENT",
                    "PERSISTENT"
                }
                /** Get statistics of a stream */
                interface StreamStats {
                    /** Number of messages per second */
                    usage: double;
                }
                /** Status of the stream */
                enum StreamStatusEnum {
                    "ERROR",
                    "INSTALLING",
                    "RUNNING"
                }
            }
            namespace loadbalancer {
                namespace action {
                    /** Available status code for Redirect action */
                    enum RedirectStatusCodeEnum {
                        "301",
                        "302",
                        "303",
                        "307",
                        "308"
                    }
                    /** Available status code for Reject action */
                    enum RejectStatusCodeEnum {
                        "200",
                        "400",
                        "403",
                        "405",
                        "408",
                        "429",
                        "500",
                        "502",
                        "503",
                        "504"
                    }
                }
                namespace backend {
                    /** Available load balancer backend balancer algorithm */
                    enum BalancerAlgorithmEnum {
                        "first",
                        "leastconn",
                        "roundrobin",
                        "source",
                        "static-rr"
                    }
                    /** Available load balancer backend proxy-protocol */
                    enum ProxyProtocolEnum {
                        "v1",
                        "v2",
                        "v2-cn",
                        "v2-ssl"
                    }
                }
                namespace condition {
                    /** Matching operator */
                    enum MatchEnum {
                        "end-with",
                        "exists",
                        "is",
                        "regex",
                        "start-with"
                    }
                    /** Matching field */
                    enum TypeEnum {
                        "cookie",
                        "header",
                        "host",
                        "method",
                        "path",
                        "query-param",
                        "source"
                    }
                }
                namespace configuration {
                    namespace networking {
                        /** Networking configuration egress definition */
                        interface Egress {
                            /** vrack networking id */
                            id ? : string;
                            /** networking egress kind definition */
                            kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                        }
                        /** Networking configuration ingress definition */
                        interface Ingress {
                            /** networking configuration ingress kind definition */
                            kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                        }
                        /** Networking configuration object */
                        interface Networking {
                            /** Networking configuration definition for egress */
                            egress ? : cloud.project.loadbalancer.configuration.networking.Egress;
                            /** Networking configuration definition for ingress */
                            ingress ? : cloud.project.loadbalancer.configuration.networking.Ingress;
                        }
                    }
                }
                namespace frontend {
                    /** Available load balancer frontend mode */
                    enum ModeEnum {
                        "TCP"
                    }
                }
                namespace networking {
                    namespace egress {
                        /** Networking kind */
                        enum KindEnum {
                            "public",
                            "vrack"
                        }
                    }
                    namespace ingress {
                        /** Networking kind */
                        enum KindEnum {
                            "public"
                        }
                    } /** Networking Egress definition */
                    interface Egress {
                        /** vrack networking id */
                        id ? : string;
                        /** networking egress kind definition */
                        kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                    }
                    /** Networking Egress definition */
                    interface EgressCreation {
                        /** networking egress kind definition */
                        kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                    }
                    /** Networking Ingress definition */
                    interface Ingress {
                        /** networking ingress kind definition */
                        kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                    }
                    /** Networking Ingress definition */
                    interface IngressCreation {
                        /** networking ingress kind definition */
                        kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                    }
                    /** Networking object */
                    interface Networking {
                        /** Networking definition for egress */
                        egress: cloud.project.loadbalancer.networking.Egress;
                        /** Networking definition for ingress */
                        ingress: cloud.project.loadbalancer.networking.Ingress;
                    }
                    /** Networking creation object */
                    interface NetworkingCreation {
                        /** Networking definition for egress */
                        egress ? : cloud.project.loadbalancer.networking.EgressCreation;
                        /** Networking definition for ingress */
                        ingress ? : cloud.project.loadbalancer.networking.IngressCreation;
                    }
                }
                namespace stats {
                    namespace target {
                        namespace server {
                            /** Status of target's server */
                            enum StatusEnum {
                                "ERROR",
                                "HEALTHY",
                                "INIT",
                                "L4_CONNECTION_ERROR",
                                "L4_TIMEOUT_ERROR",
                                "L7_PROTOCOL_ERROR",
                                "L7_RESPONSE_ERROR",
                                "L7_TIMEOUT",
                                "UNKNOWN"
                            }
                        } /** Loadbalancer target server stats */
                        interface Server {
                            /** Target name */
                            name: string;
                            /** Server status */
                            status: cloud.project.loadbalancer.stats.target.server.StatusEnum;
                        }
                    } /** Status of availability of loadbalancer */
                    enum StatusEnum {
                        "HEALTHY",
                        "NOT_AVAILABLE"
                    }
                    /** Loadbalancer target stats */
                    interface Target {
                        /** Target name */
                        name: string;
                        /** Concurrent connections */
                        servers: cloud.project.loadbalancer.stats.target.Server[];
                    }
                    /** Loadbalancer bandwidth stats */
                    interface Throughput {
                        /** Consumed inbound bandwidth (bytes/s) */
                        in: double;
                        /** Consumed outbound bandwidth (bytes/s) */
                        out: double;
                    }
                }
                namespace target {
                    /** Available load balancer target balancer algorithm */
                    enum BalancerAlgorithmEnum {
                        "first",
                        "leastconn",
                        "roundrobin",
                        "source",
                        "static-rr"
                    }
                    /** Available load balancer target proxy-protocol */
                    enum ProxyProtocolEnum {
                        "v1",
                        "v2",
                        "v2-cn",
                        "v2-ssl"
                    }
                } /** HTTP load balancer dispatch action */
                interface ActionDispatch {
                    /** The backend name */
                    name: string;
                    /** Target name */
                    target: string;
                }
                /** HTTP load balancer redirect action */
                interface ActionRedirect {
                    /** Location url */
                    location: string;
                    /** The backend name */
                    name: string;
                    /** StatusCode for redirect action */
                    statusCode: cloud.project.loadbalancer.action.RedirectStatusCodeEnum;
                }
                /** HTTP load balancer reject action */
                interface ActionReject {
                    /** The action name */
                    name: string;
                    /** StatusCode for reject action */
                    statusCode: cloud.project.loadbalancer.action.RejectStatusCodeEnum;
                }
                /** HTTP load balancer rewrite action */
                interface ActionRewrite {
                    /** Location url */
                    location: string;
                    /** The backend name */
                    name: string;
                }
                /** HTTP load balancer actions */
                interface Actions {
                    /** List of dispatch actions */
                    dispatch ? : cloud.project.loadbalancer.ActionDispatch[];
                    /** List of redirect actions */
                    redirect ? : cloud.project.loadbalancer.ActionRedirect[];
                    /** List of reject actions */
                    reject ? : cloud.project.loadbalancer.ActionReject[];
                    /** List of rewrite actions */
                    rewrite ? : cloud.project.loadbalancer.ActionRewrite[];
                }
                /** Address to reach the load balancer */
                interface Address {
                    /** IP version 4 */
                    ipv4: ipv4;
                    /** IP version 6 */
                    ipv6 ? : ipv6;
                }
                /** IP list split in version 4 and 6 */
                interface Addresses {
                    /** IP version 4 list */
                    ipv4: ipv4Block[];
                    /** IP version 6 list */
                    ipv6 ? : ipv6Block[];
                }
                /** An application load balancer configuration */
                interface ApplicationConfiguration {
                    /** All actions */
                    actions ? : cloud.project.loadbalancer.Actions;
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of conditions */
                    conditions ? : cloud.project.loadbalancer.Condition[];
                    /** List of entryPoints */
                    entryPoints: cloud.project.loadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking: cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** An application load balancer configuration */
                interface ApplicationConfigurationCreation {
                    /** All actions */
                    actions ? : cloud.project.loadbalancer.Actions;
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of conditions */
                    conditions ? : cloud.project.loadbalancer.Condition[];
                    /** List of entryPoints */
                    entryPoints: cloud.project.loadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking ? : cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** Application load balancer size capability */
                interface ApplicationLoadBalancerSizeCapability {
                    /** Bandwidth allowed in Mb/s */
                    bandwidth: number;
                    /** Maximum connection allowed on the load balancer */
                    maximumConnection: number;
                    /** Number of requests allowed per second */
                    requestsPerSecond: number;
                    /** Size of the load balancer */
                    size: cloud.project.loadbalancer.SizeEnum;
                }
                /** A load balancer backend */
                interface Backend {
                    /** Use a specific balancer algorithm */
                    balancer ? : cloud.project.loadbalancer.backend.BalancerAlgorithmEnum;
                    /** The backend name */
                    name: string;
                    /** Use proxy protocol on backend */
                    proxyProtocol ? : cloud.project.loadbalancer.backend.ProxyProtocolEnum;
                    /** List of server in backend */
                    servers: cloud.project.loadbalancer.Server[];
                    /** Enable sticky session, only usable with http-mode frontends */
                    sticky ? : boolean;
                }
                /** Select a load balancer backend */
                interface BackendSelector {
                    /** The backend name */
                    name: string;
                }
                /** A condition */
                interface Condition {
                    /** The condition name */
                    key ? : string;
                    /** Criterion matching operation */
                    match: cloud.project.loadbalancer.condition.MatchEnum;
                    /** The condition name */
                    name: string;
                    /** Negate the condition */
                    negate ? : boolean;
                    /** Criterion used to chose the appropriate action */
                    type: cloud.project.loadbalancer.condition.TypeEnum;
                    /** The list of values to match */
                    values: string[];
                }
                /** A load balancer configuration */
                interface Configuration {
                    /** List of backends */
                    backends: cloud.project.loadbalancer.Backend[];
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of frontends */
                    frontends: cloud.project.loadbalancer.Frontend[];
                    /** networking configuration */
                    networking: cloud.project.loadbalancer.configuration.networking.Networking;
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** A load balancer configuration */
                interface ConfigurationCreation {
                    /** List of backends */
                    backends: cloud.project.loadbalancer.Backend[];
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of frontends */
                    frontends: cloud.project.loadbalancer.Frontend[];
                    /** networking configuration */
                    networking ? : cloud.project.loadbalancer.configuration.networking.Networking;
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** Information about version of the configuration */
                interface ConfigurationVersion {
                    /** Applied version of the configuration */
                    applied: number;
                    /** Latest version of the configuration */
                    latest: number;
                }
                /** A load balancer entryPoint */
                interface EntryPoint {
                    /** The default target name */
                    defaultTarget ? : string;
                    /** Disable HTTP2 */
                    disableH2 ? : boolean;
                    /** The frontend name */
                    name: string;
                    /** Port ranges to listen */
                    portRanges ? : cloud.project.loadbalancer.PortRange[];
                    /** Ports to listen */
                    ports ? : number[];
                    /** List of rules */
                    rules: cloud.project.loadbalancer.Rule[];
                    /** tls */
                    tls: boolean;
                }
                /** A load balancer frontend */
                interface Frontend {
                    /** Selector for backend */
                    backends: cloud.project.loadbalancer.BackendSelector[];
                    /** Load balancing mode */
                    mode ? : cloud.project.loadbalancer.frontend.ModeEnum;
                    /** The frontend name */
                    name: string;
                    /** Port to listen (deprecated: see ports) */
                    port ? : number;
                    /** Port ranges to listen */
                    portRanges ? : cloud.project.loadbalancer.PortRange[];
                    /** Ports to listen */
                    ports ? : number[];
                    /** tls */
                    tls: boolean;
                    /** IP range to whitelist */
                    whitelist: string[];
                }
                /** Network load balancer size capability */
                interface LoadBalancerSizeCapability {
                    /** Bandwidth allowed in Mb/s */
                    bandwidth: number;
                    /** Maximum connection allowed on the load balancer */
                    maximumConnection: number;
                    /** Number of new connection allowed per second */
                    newConnectionPerSecond: number;
                    /** Size of the load balancer */
                    size: cloud.project.loadbalancer.SizeEnum;
                }
                /** A port range */
                interface PortRange {
                    /** Port range end */
                    end: number;
                    /** Port range start */
                    start: number;
                }
                /** Region information */
                interface Region {
                    /** Region name */
                    region: string;
                }
                /** A entrypoint rule */
                interface Rule {
                    /** The action name */
                    action: string;
                    /** The list of condition to match */
                    conditions ? : string[];
                }
                /** A load balancer backend server */
                interface Server {
                    /** IP address of a server */
                    ip: string;
                    /** Server name */
                    name: string;
                    /** Disable health check */
                    noCheck ? : boolean;
                    /** Port that the server listen */
                    port: number;
                    /** Weight of the server in the backend */
                    weight ? : number;
                }
                /** Size of the load balancer */
                enum SizeEnum {
                    "L",
                    "M",
                    "S"
                }
                /** Loadbalancer stats */
                interface Stats {
                    /** Concurrent connections */
                    concurrentFlows: double;
                    /** HTTP requests made */
                    httpRequestsPerSecond ? : double;
                    /** Main loadbalancer status */
                    status: cloud.project.loadbalancer.stats.StatusEnum;
                    /** Targets state */
                    targets: cloud.project.loadbalancer.stats.Target[];
                    /** New connections opened per second */
                    tcpConnectionsPerSecond: double;
                    /** Throughput consumed on the entrypoints */
                    throughput: cloud.project.loadbalancer.stats.Throughput;
                }
                /** Status of a load balancer */
                enum StatusEnum {
                    "APPLYING",
                    "CREATED",
                    "DELETING",
                    "ERROR",
                    "FROZEN",
                    "RUNNING"
                }
                /** A load balancer target */
                interface Target {
                    /** Use a specific balancer algorithm */
                    balancer ? : cloud.project.loadbalancer.target.BalancerAlgorithmEnum;
                    /** The backend name */
                    name: string;
                    /** Use proxy protocol on target */
                    proxyProtocol ? : cloud.project.loadbalancer.target.ProxyProtocolEnum;
                    /** List of server in target */
                    servers: cloud.project.loadbalancer.Server[];
                    /** Enable sticky session, only usable with http-mode frontends */
                    sticky ? : boolean;
                }
            }
            namespace networkloadbalancer {
                namespace action {
                    /** Available type of Reject action */
                    enum RejectTypeEnum {
                        "deny",
                        "drop"
                    }
                }
                namespace condition {
                    /** Matching field */
                    enum TypeEnum {
                        "source"
                    }
                } /** network load balancer reject action */
                interface ActionReject {
                    /** The action name */
                    name: string;
                    /** type of reject action */
                    type: cloud.project.networkloadbalancer.action.RejectTypeEnum;
                }
                /** Network Loadbalancer action */
                interface Actions {
                    /** List of dispatch actions */
                    dispatch ? : cloud.project.loadbalancer.ActionDispatch[];
                    /** List of reject actions */
                    reject ? : cloud.project.networkloadbalancer.ActionReject[];
                }
                /** A condition */
                interface Condition {
                    /** The condition name */
                    key ? : string;
                    /** Criterion matching operation */
                    match: cloud.project.loadbalancer.condition.MatchEnum;
                    /** The condition name */
                    name: string;
                    /** Negate the condition */
                    negate ? : boolean;
                    /** Criterion used to chose the appropriate action */
                    type: cloud.project.networkloadbalancer.condition.TypeEnum;
                    /** The list of values to match */
                    values: string[];
                }
                /** A network load balancer configuration */
                interface Configuration {
                    /** All actions */
                    actions ? : cloud.project.networkloadbalancer.Actions;
                    /** List of conditions */
                    conditions ? : cloud.project.networkloadbalancer.Condition[];
                    /** List of entryPoints */
                    entryPoints: cloud.project.networkloadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking: cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** A network load balancer configuration */
                interface ConfigurationCreation {
                    /** All actions */
                    actions ? : cloud.project.networkloadbalancer.Actions;
                    /** List of conditions */
                    conditions ? : cloud.project.networkloadbalancer.Condition[];
                    /** List of entryPointss */
                    entryPoints: cloud.project.networkloadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking ? : cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** A network load balancer entryPoint */
                interface EntryPoint {
                    /** The default target name */
                    defaultTarget ? : string;
                    /** The frontend name */
                    name: string;
                    /** Port ranges to listen */
                    portRanges ? : cloud.project.loadbalancer.PortRange[];
                    /** Ports to listen */
                    ports ? : number[];
                    /** List of rules */
                    rules: cloud.project.loadbalancer.Rule[];
                }
                /** Network load balancer size capability */
                interface LoadBalancerSizeCapability {
                    /** Bandwidth allowed in Mb/s */
                    bandwidth: number;
                    /** Maximum connection allowed on the load balancer */
                    maximumConnection: number;
                    /** Maximum number of connections opened per second */
                    newConnectionPerSecond: number;
                    /** Size of the load balancer */
                    size: cloud.project.loadbalancer.SizeEnum;
                }
            } /** AllocationPool */
            interface AllocationPool {
                /** Last IP for the pool (eg: 192.168.1.24) */
                end: string;
                /** First IP for the pool (eg: 192.168.1.12) */
                start: string;
            }
            /** A load balancer to handle application workload */
            interface ApplicationLoadBalancer {
                /** Address to reach the load balancer */
                address: cloud.project.loadbalancer.Address;
                /** Information about version of the configuration */
                configuration: cloud.project.loadbalancer.ConfigurationVersion;
                /** Creation date and time of the load balancer */
                createdAt: string;
                /** Description of the load balancer */
                description ? : string;
                /** IPs used by the load balancer to contact backend's servers */
                egressAddress: cloud.project.loadbalancer.Addresses;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Openstack region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size: cloud.project.loadbalancer.SizeEnum;
                /** Status of a load balancer */
                status: cloud.project.loadbalancer.StatusEnum;
            }
            /** A load balancer to handle application workload */
            interface ApplicationLoadBalancerCreation {
                /** Description of the load balancer */
                description ? : string;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking ? : cloud.project.loadbalancer.networking.NetworkingCreation;
                /** Openstack Region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size ? : cloud.project.loadbalancer.SizeEnum;
            }
            /** Usage information for current month on your project */
            interface BandwidthStorageUsage {
                /** Downloaded bytes from your containers */
                downloadedBytes: number;
                /** Region */
                region: string;
                /** Cost for your storage bandwidth */
                total: order.Price;
            }
            /** Project bill */
            interface Bill {
                /** Bill id */
                billId: string;
                /** Bill type */
                type: cloud.project.BillTypeEnum;
            }
            /** Possible values for bill type */
            enum BillTypeEnum {
                "creditPurchased",
                "monthlyConsumption",
                "monthlyInstanceActivation"
            }
            /** A Certificate to use in your NFVs */
            interface Certificate {
                /** Date after when the certificate is not valid */
                expireAt: string;
                /** Fingerprint of the cert (prefixed by hashing algorithm used) */
                fingerprint: string;
                /** Unique ID of the certificate */
                id: string;
                /** Issue of the certificate (extract from certificate) */
                issuer: string;
                /** Kind of certificate */
                kind: cloud.project.CertificateKindEnum;
                /** Name of the certificate */
                name: string;
                /** Serial number of the certificate (extract from certificate) */
                serialNumber: string;
                /** List of SANs (extract from certificate) */
                serverAlternativeNames: cloud.project.certificate.ServerAlternativeName[];
                /** Certificate status, to quickly know it can safely be used */
                status: cloud.project.CertificateStatusEnum;
                /** Subject of the certificate (extract from certificate) */
                subject: string;
                /** Date after when the certificate is valid */
                validAt: string;
                /** Version of certificate (incremented every time you push a new certificate with the same name) */
                version: number;
            }
            /** Add a new certificate */
            interface CertificateAdd {
                /** Import an existing certificate */
                import ? : cloud.project.certificate.Import;
                /** Name of the certificate */
                name: string;
            }
            /** Certificate kind */
            enum CertificateKindEnum {
                "IMPORTED"
            }
            /** Certificate status */
            enum CertificateStatusEnum {
                "EXPIRED",
                "NOT_YET_VALID",
                "OK",
                "REVOKED"
            }
            /** Usage information for current month on your project */
            interface CurrentUsage {
                /** Instances usage */
                instances: cloud.project.InstancesUsage;
                /** Snapshots usage */
                snapshots: cloud.project.SnapshotsUsage;
                /** Storage usage */
                storage: cloud.project.StorageUsage;
                /** Total cost for the project */
                total: order.Price;
                /** Snapshots usage */
                volumeSnapshots: cloud.project.SnapshotsUsage;
                /** Volumes usage */
                volumes: cloud.project.VolumesUsage;
            }
            /** Possible eligibility actions */
            enum EligibilityAction {
                "addPaymentMethod",
                "askIncreaseProjectsQuota",
                "challengePaymentMethod",
                "verifyPaypal"
            }
            /** Eligibility information */
            interface EligibilityInfo {
                /** Actions to perform to be eligible */
                actionsRequired ? : cloud.project.EligibilityAction[];
                /** Cloud project order */
                minimumCredit ? : order.Price;
                /** Payment method accepted to order Public Cloud project */
                paymentMethodsAuthorized ? : cloud.project.PaymentMethodAuthorized[];
                /** Information about voucher code */
                voucher ? : cloud.project.NewProjectInfoVoucher;
            }
            /** A floating ip */
            interface FloatingIp {
                /** Associated entity with the floating ip */
                associatedEntity ? : cloud.project.floatingIp.AssociatedEntity;
                /** ID of the floating ip */
                id: string;
                /** Value of the floating ip */
                ip: string;
                /** ID of the network */
                networkId: string;
                /** Floating ip region */
                region ? : string;
                /** Status of the floating ip */
                status: cloud.project.floatingIp.StatusEnum;
            }
            /** Instance monthly billing details */
            interface InstanceMonthlyBilling {
                /** Monthly billing activation date */
                activatedOn: string;
                /** Cost */
                cost: order.Price;
            }
            /** Instance usage */
            interface InstanceUsageDetail {
                /** Hourly price */
                hourly ? : order.Price;
                /** Instance id */
                instanceId: string;
                /** Monthly price */
                monthly ? : cloud.project.InstanceMonthlyBilling;
                /** Is monthly billing enabled */
                monthlyBilling: boolean;
                /** Reference */
                reference: string;
            }
            /** Instances usage for current month */
            interface InstancesUsage {
                /** Instance usage details */
                detail: cloud.project.InstanceUsageDetail[];
                /** Total cost for the instances */
                total: order.Price;
            }
            /** A load balancer to handle workload */
            interface LoadBalancer {
                /** Address to reach the load balancer */
                address: cloud.project.loadbalancer.Address;
                /** Information about version of the configuration */
                configuration: cloud.project.loadbalancer.ConfigurationVersion;
                /** Creation date and time of the load balancer */
                createdAt: string;
                /** Description of the load balancer */
                description ? : string;
                /** IPs used by the load balancer to contact backend's servers */
                egressAddress: cloud.project.loadbalancer.Addresses;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking: cloud.project.loadbalancer.networking.Networking;
                /** Openstack region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size: cloud.project.loadbalancer.SizeEnum;
                /** Status of a load balancer */
                status: cloud.project.loadbalancer.StatusEnum;
            }
            /** A load balancer to handle workload */
            interface LoadBalancerCreation {
                /** Description of the load balancer */
                description ? : string;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking ? : cloud.project.loadbalancer.networking.NetworkingCreation;
                /** Openstack Region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size ? : cloud.project.loadbalancer.SizeEnum;
            }
            /** Network */
            interface Network {
                /** Network id */
                id: string;
                /** Network name */
                name: string;
                /** Network region */
                region ? : string;
                /** Network visibility */
                visibility: cloud.network.NetworkVisibilityEnum;
                /** Network VLAN id */
                vlanId ? : number;
            }
            /** A network load balancer for TCP/UDP workloads */
            interface NetworkLoadBalancer {
                /** Address to reach the load balancer */
                address: cloud.project.loadbalancer.Address;
                /** Information about version of the configuration */
                configuration: cloud.project.loadbalancer.ConfigurationVersion;
                /** Creation date and time of the load balancer */
                createdAt: string;
                /** Description of the load balancer */
                description ? : string;
                /** IPs used by the load balancer to contact backend's servers */
                egressAddress: cloud.project.loadbalancer.Addresses;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Openstack region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size: cloud.project.loadbalancer.SizeEnum;
                /** Status of a load balancer */
                status: cloud.project.loadbalancer.StatusEnum;
            }
            /** A network load balancer for TCP/UDP workloads */
            interface NetworkLoadBalancerCreation {
                /** Description of the load balancer */
                description ? : string;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking ? : cloud.project.loadbalancer.networking.NetworkingCreation;
                /** Openstack Region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size ? : cloud.project.loadbalancer.SizeEnum;
            }
            /** Information about voucher */
            interface NewProjectInfoVoucher {
                /** Credit added thanks to the voucher */
                credit: order.Price;
                /** A valid registered payment method is required to use the voucher */
                paymentMethodRequired: boolean;
            }
            /** List of accepted payment methods */
            enum PaymentMethodAuthorized {
                "bankAccount",
                "credit",
                "creditCard",
                "paypal",
                "sepaDirectDebit"
            }
            /** Product agreements */
            interface ProductAgreements {
                /** Agreements to validate */
                agreementsToValidate ? : number[];
                /** Agreements already validated */
                agreementsValidated ? : number[];
            }
            /** Possible values for cloud project product name */
            enum ProductNameEnum {
                "registry"
            }
            /** Possible values for project status */
            enum ProjectStatus {
                "creating",
                "deleted",
                "deleting",
                "ok",
                "suspended"
            }
            /** Possible values for project status */
            enum ProjectStatusEnum {
                "creating",
                "deleted",
                "deleting",
                "ok",
                "suspended"
            }
            /** Usage information on your project */
            interface ProjectUsage {
                /** Current usage details */
                current: cloud.project.CurrentUsage;
            }
            /** Snapshot usage */
            interface SnapshotUsageDetail {
                /** Snapshot price */
                price: order.Price;
                /** Snapshot region */
                region: string;
                /** Stored snapshot size in gigabytes */
                storedSize: complexType.UnitAndValue < double > ;
            }
            /** Snapshots usage for current month */
            interface SnapshotsUsage {
                /** Snapshots usage details */
                detail: cloud.project.SnapshotUsageDetail[];
                /** Total cost for the snapshots */
                total: order.Price;
            }
            /** Usage information for current month on your project */
            interface StorageUsage {
                /** Storage bandwidth usage */
                bandwidth: cloud.project.BandwidthStorageUsage[];
                /** Cost for your storage in all your containers */
                total: order.Price;
                /** Storage volume usage */
                volume: cloud.project.StorageVolumeUsage[];
            }
            /** Storage volume used on your project */
            interface StorageVolumeUsage {
                /** Region */
                region: string;
                /** Bytes stored in your containers */
                storedBytes: number;
                /** Cost for your storage bandwidth */
                total: order.Price;
            }
            /** Subnet */
            interface Subnet {
                /** List of ip pools allocated in subnet */
                allocationPools: cloud.project.AllocationPool[];
                /** Subnet CIDR */
                cidr: string;
                /** If DHCP is enabled on subnet */
                dhcpEnabled: boolean;
                /** Gateway IP */
                gatewayIp ? : string;
                /** Subnet id */
                id: string;
                /** IP Version (4 or 6) */
                ipVersion: number;
                /** Subnet name */
                name: string;
            }
            /** Possible values for volume type */
            enum VolumeType {
                "classic",
                "high-speed"
            }
            /** Volume usage */
            interface VolumeUsageDetail {
                /** Volume price */
                price: order.Price;
                /** Volume capacity in gigabytes */
                volumeCapacity: complexType.UnitAndValue < long > ;
                /** Volume id */
                volumeId: string;
                /** Volume type */
                volumeType: cloud.project.VolumeType;
            }
            /** Volumes usage for current month */
            interface VolumesUsage {
                /** Volume usage details */
                detail: cloud.project.VolumeUsageDetail[];
                /** Total cost for the volumes */
                total: order.Price;
            }
        }
        namespace quota {
            namespace storage {
                /** Cloud Storage Quota */
                interface Quota {
                    /** Quota used in bytes */
                    bytesUsed: number;
                    /** Number of containers on account */
                    containerCount: number;
                    /** Number of objects on account */
                    objectCount: number;
                    /** Quota in bytes */
                    quotaBytes ? : number;
                }
                /** Update storage quota */
                interface QuotaUpdate {
                    /** New quota in bytes */
                    quotaBytes: number;
                }
            } /** Quotas */
            interface AllowedQuota {
                /** Quotas for compute */
                compute: cloud.quota.ComputeQuota;
                /** Name */
                name: string;
                /** Quotas for network */
                network: cloud.quota.NetworkQuota;
                /** Quotas for volume */
                volume: cloud.quota.VolumeQuota;
            }
            /** Quotas for compute */
            interface ComputeQuota {
                /** Maximum total cores allowed in your project */
                cores: number;
                /** Maximum number of instances allowed in your project */
                instances: number;
                /** Maximum total ram allowed in your project */
                ram: number;
            }
            /** Quotas on instances */
            interface InstanceUsageQuotas {
                /** Maximum total cores allowed in your project */
                maxCores: number;
                /** Maximum total cores allowed in your project */
                maxInstances: number;
                /** maxRam */
                maxRam: number;
                /** Current used cores number */
                usedCores: number;
                /** Current used instances */
                usedInstances: number;
                /** Current used ram */
                usedRAM: number;
            }
            /** Quotas on keymanager */
            interface KeymanagerQuotas {
                /** Maximum number of secrets allowed in your project */
                maxSecrets: number;
                /** Current number of used secrets */
                usedSecrets: number;
            }
            /** Quotas on keypairs */
            interface KeypairQuotas {
                /** Maximum keypairs count allowed in your project */
                maxCount: number;
            }
            /** Quotas on loadbalancer */
            interface LoadbalancerQuotas {
                /** Maximum number of loadbalancers allowed in your project */
                maxLoadbalancers: number;
                /** Current number of used loadbalancers */
                usedLoadbalancers: number;
            }
            /** Quotas for network */
            interface NetworkQuota {
                /** Maximum number of networks allowed in your project */
                networks: number;
                /** Maximum number of ports allowed in your project */
                ports: number;
                /** Maximum number of subnets allowed in your project */
                subnets: number;
            }
            /** Quotas on network */
            interface NetworkQuotas {
                /** Maximum number of floating ips allowed in your project */
                maxFloatingIPs: number;
                /** Maximum number of gateways allowed in your project */
                maxGateways: number;
                /** Maximum networks allowed in your project */
                maxNetworks: number;
                /** Maximum subnets allowed in your project */
                maxSubnets: number;
                /** Current number of used floating ips */
                usedFloatingIPs: number;
                /** Current number of used gateways */
                usedGateways: number;
                /** Current used networks */
                usedNetworks: number;
                /** Current used subnets */
                usedSubnets: number;
            }
            /** Quotas */
            interface Quotas {
                /** Quotas on instances */
                instance ? : cloud.quota.InstanceUsageQuotas;
                /** Quotas on keymanager */
                keymanager ? : cloud.quota.KeymanagerQuotas;
                /** Quotas on keypairs */
                keypair ? : cloud.quota.KeypairQuotas;
                /** Quotas on loadbalancer */
                loadbalancer ? : cloud.quota.LoadbalancerQuotas;
                /** Quotas on network */
                network ? : cloud.quota.NetworkQuotas;
                /** Region */
                region: string;
                /** Quotas on volumes */
                volume ? : cloud.quota.VolumeUsageQuotas;
            }
            /** Quotas for volume */
            interface VolumeQuota {
                /** Maximum total volume capacity allowed in your project */
                gigabytes: number;
                /** Maximum number of snapshots allowed in your project */
                snapshots: number;
                /** Maximum number of volumes allowed in your project */
                volumes: number;
            }
            /** Quotas on volumes */
            interface VolumeUsageQuotas {
                /** Maximum total volume backup capacity allowed in your project */
                maxBackupGigabytes: number;
                /** Maximum total volume capacity allowed in your project */
                maxGigabytes: number;
                /** Maximum volumes backup count */
                maxVolumeBackupCount: number;
                /** Maximum volumes count */
                maxVolumeCount: number;
                /** Current used volume backup gigabytes */
                usedBackupGigabytes: number;
                /** Current used volume gigabytes */
                usedGigabytes: number;
                /** Current volumes backup count */
                volumeBackupCount: number;
                /** Current volumes count */
                volumeCount: number;
            }
        }
        namespace role {
            /** Role permissions */
            interface Permission {
                /** Permission label */
                label: string;
                /** Roles having this permission */
                roles: string[];
            }
            /** Role */
            interface Role {
                /** Role Description */
                description: string;
                /** Role id */
                id: string;
                /** Role Name */
                name: string;
                /** Permissions granted by this role */
                permissions: string[];
            }
            /** OpenStack role */
            interface Roles {
                /** OpenStack roles */
                roles: cloud.role.Role[];
                /** OpenStack services */
                services: cloud.role.Service[];
            }
            /** OpenStack service */
            interface Service {
                /** Name of the service */
                name: string;
                /** List of permissions */
                permissions: cloud.role.Permission[];
            }
        }
        namespace sshkey {
            /** SshKey */
            interface SshKey {
                /** SSH key id */
                id: string;
                /** SSH key name */
                name: string;
                /** SSH public key */
                publicKey: string;
                /** SSH key regions */
                regions: string[];
            }
            /** SshKeyDetail */
            interface SshKeyDetail {
                /** SSH key fingerprint */
                fingerPrint: string;
                /** SSH key id */
                id: string;
                /** SSH key name */
                name: string;
                /** SSH public key */
                publicKey: string;
                /** SSH key regions */
                regions: string[];
            }
        }
        namespace stack {
            /** Content */
            interface Content {
                /** Content */
                content: string;
                /** Type of the content */
                type: string;
            }
            /** InstructionGuide */
            interface InstructionGuide {
                /** Guide introduction content */
                content: cloud.stack.Content[];
                /** Guide language */
                language: string;
                /** Sections of the guide */
                sections: cloud.stack.Section[];
                /** Guide title */
                title: string;
            }
            /** Section */
            interface Section {
                /** Content of the guide section */
                content: cloud.stack.Content[];
                /** Steps to follow */
                steps: cloud.stack.Step[];
                /** Title of the guide section */
                title: string;
            }
            /** Stack */
            interface Stack {
                /** Stack last commit */
                commit: string;
                /** Stack description */
                description: string;
                /** GIT repository */
                gitRepository: string;
                /** Instructions to start the stack */
                instructions: cloud.stack.InstructionGuide[];
                /** Stack name */
                name: string;
                /** Stack release tag */
                release: string;
                /** Stack uuid */
                uuid: string;
            }
            /** Step */
            interface Step {
                /** Content of the step */
                content: cloud.stack.Content[];
                /** Title of the step */
                title: string;
            }
        }
        namespace storage {
            /** Add storage policy for container */
            interface AddContainerPolicy {
                /** Container object key */
                objectKey: string;
                /** Policy role */
                roleName: cloud.storage.PolicyRoleEnum;
            }
            /** Container */
            interface Container {
                /** Storage id */
                id: string;
                /** Storage name */
                name: string;
                /** region */
                region: string;
                /** Total bytes stored */
                storedBytes: number;
                /** Total objects stored */
                storedObjects: number;
            }
            /** ContainerAccess */
            interface ContainerAccess {
                /** Storage access endpoints */
                endpoints: cloud.storage.Endpoint[];
                /** Storage access token */
                token: string;
            }
            /** ContainerDetail */
            interface ContainerDetail {
                /** Whether this is an archive container or not */
                archive: boolean;
                /** Container type */
                containerType: cloud.storage.TypeEnum;
                /** Origins allowed to make Cross Origin Requests */
                cors: string[];
                /** Container name */
                name: string;
                /** Objects stored in container */
                objects: cloud.storage.ContainerObject[];
                /** Public container (DEPRECATED: see containerType) */
                public: boolean;
                /** Container region */
                region: string;
                /** Container static URL */
                staticUrl: string;
                /** Total bytes stored */
                storedBytes: number;
                /** Total objects stored */
                storedObjects: number;
            }
            /** ContainerObject */
            interface ContainerObject {
                /** Object content type */
                contentType: string;
                /** Last modification date */
                lastModified: string;
                /** Object name */
                name: string;
                /** Object retrieval delay (when unsealing) */
                retrievalDelay: number;
                /** Object retrieval state */
                retrievalState: cloud.storage.RetrievalStateEnum;
                /** Object size */
                size: number;
            }
            /** ContainerObjectTempURL */
            interface ContainerObjectTempURL {
                /** Temporary URL expiration date */
                expirationDate: string;
                /** Temporary URL to get object */
                getURL: string;
            }
            /** Endpoint */
            interface Endpoint {
                /** Endpoint region */
                region: string;
                /** Endpoint URL */
                url: string;
            }
            /** Raw storage policy */
            interface PolicyRaw {
                /** Raw storage policy */
                policy: string;
            }
            /** Storage policy role */
            enum PolicyRoleEnum {
                "admin",
                "deny",
                "readOnly",
                "readWrite"
            }
            /** Presigned URL */
            interface PresignedURL {
                /** Presigned URL method */
                method: cloud.storage.PresignedURLMethodEnum;
                /** Presigned URL */
                url: string;
            }
            /** Inputs to generate a presigned URL */
            interface PresignedURLInput {
                /** URL expiration in seconds */
                expire: number;
                /** Presigned URL method */
                method: cloud.storage.PresignedURLMethodEnum;
                /** Object name */
                object: string;
            }
            /** Presigned URL method */
            enum PresignedURLMethodEnum {
                "GET",
                "PUT"
            }
            /** Cloud Storage Quota */
            interface Quota {
                /** Current number of buckets */
                buckets: number;
                /** Maximum number of buckets */
                maxBuckets: number;
            }
            /** RetrievalStateEnum */
            enum RetrievalStateEnum {
                "sealed",
                "unsealed",
                "unsealing"
            }
            /** RightEnum */
            enum RightEnum {
                "all",
                "read",
                "write"
            }
            /** TypeEnum */
            enum TypeEnum {
                "private",
                "public",
                "static"
            }
        }
        namespace usage {
            /** PaymentTypeEnum */
            enum PaymentTypeEnum {
                "post",
                "pre"
            }
            /** Period */
            interface Period {
                /** Usage from */
                from: string;
                /** Usage to */
                to: string;
            }
            /** UsageBill */
            interface UsageBill {
                /** ID of the bill */
                bill_id: string;
                /** Amount of credits used in this bill (not necessarily on part) */
                credit: double;
                /** Amount of the bill that accounts for services for the usage period, credits not taken into account */
                part: double;
                /** Payment type */
                payment_type: cloud.usage.PaymentTypeEnum;
                /** Total amount of the bill, credits not taken into account */
                total: double;
            }
            /** UsageCurrent */
            interface UsageCurrent {
                /** Hourly usage */
                hourlyUsage ? : cloud.billingView.HourlyResources;
                /** Entry last update */
                lastUpdate: string;
                /** Monthly usage */
                monthlyUsage ? : cloud.billingView.MonthlyResources;
                /** Usage dates (from/to) */
                period: cloud.usage.Period;
                /** Resource usage (billed per hour/minute/second/unit) */
                resourcesUsage ? : cloud.billingView.TypedResources[];
            }
            /** UsageCurrentBills */
            interface UsageCurrentBills {
                /** Bills related to the current usage */
                bills: cloud.usage.UsageBill[];
            }
            /** UsageForecast */
            interface UsageForecast {
                /** Hourly forecast */
                hourlyUsage ? : cloud.billingView.HourlyResources;
                /** Entry last update */
                lastUpdate: string;
                /** Monthly forecast */
                monthlyUsage ? : cloud.billingView.MonthlyResources;
                /** Forecast dates (from/to) */
                period: cloud.usage.Period;
                /** Resource usage forecast (billed per hour/minute/second/unit) */
                resourcesUsage ? : cloud.billingView.TypedResources[];
                /** Usable credit to pay next bill */
                usableCredits ? : cloud.billingView.UsedCredits;
            }
            /** UsageHistory */
            interface UsageHistory {
                /** Usage id */
                id: string;
                /** Entry last update */
                lastUpdate: string;
                /** Usage dates (from/to) */
                period: cloud.usage.Period;
            }
            /** UsageHistoryDetail */
            interface UsageHistoryDetail {
                /** Hourly usage */
                hourlyUsage ? : cloud.billingView.HourlyResources;
                /** Usage id */
                id: string;
                /** Entry last update */
                lastUpdate: string;
                /** Monthly usage */
                monthlyUsage ? : cloud.billingView.MonthlyResources;
                /** Usage dates (from/to) */
                period: cloud.usage.Period;
                /** Resource usage (billed per hour/minute/second/unit) */
                resourcesUsage ? : cloud.billingView.TypedResources[];
            }
            /** UsageHistoryDetailBills */
            interface UsageHistoryDetailBills {
                /** Bills related to the usage */
                bills: cloud.usage.UsageBill[];
            }
        }
        namespace user {
            /** Client Cloud Configuration */
            interface Configuration {
                /** Client configuration */
                content: string;
            }
            /** Openrc */
            interface Openrc {
                /** openrc file */
                content: string;
            }
            /** OpenrcVersionEnum */
            enum OpenrcVersionEnum {
                "v2.0",
                "v3"
            }
            /** RCloneServiceEnum */
            enum RCloneServiceEnum {
                "storage",
                "storage-s3"
            }
            /** Rclone */
            interface Rclone {
                /** rclone configuration file */
                content: string;
            }
            /** RoleEnum */
            enum RoleEnum {
                "admin",
                "administrator",
                "ai_training_operator",
                "ai_training_read",
                "authentication",
                "backup_operator",
                "compute_operator",
                "image_operator",
                "infrastructure_supervisor",
                "network_operator",
                "network_security_operator",
                "objectstore_operator",
                "volume_operator"
            }
            /** S3CredentialsSecretOnly */
            interface S3CredentialsSecretOnly {
                /** S3 Access key secret */
                secret: string;
            }
            /** S3CredentialsWithSecret */
            interface S3CredentialsWithSecret {
                /** S3 Access key */
                access: string;
                /** S3 Access key secret */
                secret: string;
                /** Tenant id */
                tenantId: string;
                /** User id */
                userId: string;
            }
            /** User */
            interface User {
                /** User creation date */
                creationDate: string;
                /** User description */
                description: string;
                /** User id */
                id: number;
                /** User id on openstack */
                openstackId ? : string;
                /** User roles */
                roles: cloud.role.Role[];
                /** User status */
                status: cloud.user.UserStatusEnum;
                /** Username */
                username: string;
            }
            /** UserDetail */
            interface UserDetail {
                /** User creation date */
                creationDate: string;
                /** User description */
                description: string;
                /** User id */
                id: number;
                /** User id on openstack */
                openstackId ? : string;
                /** User password */
                password: string;
                /** User roles */
                roles: cloud.role.Role[];
                /** User status */
                status: cloud.user.UserStatusEnum;
                /** Username */
                username: string;
            }
            /** UserStatusEnum */
            enum UserStatusEnum {
                "creating",
                "deleted",
                "deleting",
                "ok"
            }
        }
        namespace volume {
            /** Snapshot */
            interface Snapshot {
                /** Snapshot creation date */
                creationDate: string;
                /** Snapshot description */
                description: string;
                /** Snapshot id */
                id: string;
                /** Snapshot name */
                name: string;
                /** Order plan code */
                planCode ? : string;
                /** Snapshot region */
                region: string;
                /** Snapshot size */
                size: number;
                /** Snapshot status */
                status: cloud.volume.SnapshotStatusEnum;
                /** Volume source id */
                volumeId: string;
            }
            /** SnapshotStatusEnum */
            enum SnapshotStatusEnum {
                "available",
                "creating",
                "deleting",
                "error",
                "error_deleting"
            }
            /** Volume */
            interface Volume {
                /** Volume attached to instances id */
                attachedTo: string[];
                /** Volume bootable */
                bootable: boolean;
                /** Volume creation date */
                creationDate: string;
                /** Volume description */
                description: string;
                /** Volume id */
                id: string;
                /** Volume name */
                name: string;
                /** Order plan code */
                planCode ? : string;
                /** Volume region */
                region: string;
                /** Volume size (in GB) */
                size: number;
                /** Volume status */
                status: cloud.volume.VolumeStatusEnum;
                /** Volume type */
                type: cloud.volume.VolumeTypeEnum;
            }
            /** VolumeStatusEnum */
            enum VolumeStatusEnum {
                "attaching",
                "available",
                "awaiting-transfer",
                "backing-up",
                "creating",
                "deleting",
                "detaching",
                "downloading",
                "error",
                "error_backing-up",
                "error_deleting",
                "error_extending",
                "error_restoring",
                "extending",
                "in-use",
                "maintenance",
                "reserved",
                "restoring-backup",
                "retyping",
                "uploading"
            }
            /** VolumeTypeEnum */
            enum VolumeTypeEnum {
                "classic",
                "high-speed",
                "high-speed-gen2"
            }
        }
        namespace volumeBackup {
            /** A volume backup */
            interface VolumeBackup {
                /** Creation date of the backup */
                creationDate: string;
                /** Volume backup id */
                id: string;
                /** Volume backup name */
                name: string;
                /** Volume backup region */
                region: string;
                /** Size of the backup in GiB */
                size: number;
                /** Staus of the backup */
                status: cloud.volumeBackup.VolumeBackupStatusEnum;
                /** ID of the volume used to create the backup */
                volumeId: string;
            }
            /** Create a volume backup */
            interface VolumeBackupCreation {
                /** name of the backup */
                name: string;
                /** ID of the volume to backup */
                volumeId: string;
            }
            /** Restore a volume backup on a volume */
            interface VolumeBackupRestore {
                /** ID of the volume to restore on */
                volumeId: string;
            }
            /** VolumeBackupStatusEnum */
            enum VolumeBackupStatusEnum {
                "creating",
                "deleting",
                "error",
                "ok",
                "restoring"
            }
            /** Create a volume from a volume backup */
            interface VolumeCreationFromBackup {
                /** name of the new volume */
                name: string;
            }
        } /** Possible values for project access type */
        enum AccessTypeEnum {
            "full",
            "restricted"
        }
        /** Cloud ACL */
        interface Acl {
            /** OVH customer unique identifier */
            accountId: string;
            /** ACL type */
            type: cloud.AclTypeEnum;
        }
        /** Possible values for ACL type */
        enum AclTypeEnum {
            "readOnly",
            "readWrite"
        }
        /** Cloud alerting consumption */
        interface Alerting {
            /** Alerting creation date */
            creationDate: string;
            /** Delay between alerts in seconds */
            delay: cloud.AlertingDelayEnum;
            /** Email to contact */
            email: string;
            /** Formatted monthly threshold for this alerting */
            formattedMonthlyThreshold: order.Price;
            /** Alerting unique UUID */
            id: string;
            /** Monthly threshold for this alerting */
            monthlyThreshold: number;
        }
        /** Cloud alert on your consumption */
        interface AlertingAlert {
            /** Alert date */
            alertDate: string;
            /** Alert id */
            alertId: number;
            /** Alert sent to */
            emails: string[];
        }
        /** Possible values for delay between two alerts in seconds */
        enum AlertingDelayEnum {
            "10800",
            "172800",
            "21600",
            "259200",
            "3600",
            "43200",
            "604800",
            "86400"
        }
        /** Details about an available region that can be activated on your project */
        interface AvailableRegion {
            /** Region continent code */
            continentCode: cloud.RegionContinentEnum;
            /** Location of the datacenter where the region is */
            datacenterLocation: string;
            /** Region name */
            name: string;
        }
        /** List your automated backups */
        interface Backup {
            /** Backup name */
            backupName: string;
            /** Creation date of the workflow */
            createdAt: string;
            /** Workflow cron pattern */
            cron: string;
            /** Executions logs */
            executions ? : cloud.Execution[];
            /** Workflow id */
            id: string;
            /** Instance id */
            instanceId: string;
            /** Workflow name identifier */
            name: string;
        }
        /** Container */
        interface ColdArchiveContainer {
            /** After restoring your archive, date when the restored files will be deleted */
            automaticDeletionAt ? : string;
            /** The date when the resource was created */
            createdAt: string;
            /** Container name */
            name: string;
            /** Container objects */
            objects: cloud.StorageObject[];
            /** Container total objects count */
            objectsCount: number;
            /** Container total objects size (bytes) */
            objectsSize: number;
            /** Container owner user ID */
            ownerId: number;
            /** ColdArchive status */
            status: cloud.ColdArchiveContainerStatusEnum;
            /** Container virtual host */
            virtualHost: string;
        }
        /** Enum values for Status */
        enum ColdArchiveContainerStatusEnum {
            "archived",
            "archiving",
            "deleting",
            "flushed",
            "none",
            "restored",
            "restoring"
        }
        /** Information about the different components available in the region */
        interface Component {
            /** Endpoint URL */
            endpoint: string;
            /** Service name */
            name: string;
            /** Service status */
            status: cloud.ServiceStatusEnum;
        }
        /** Cloud credit */
        interface Credit {
            /** Available credit */
            available_credit: order.Price;
            /** Credit bill id */
            bill ? : string;
            /** Credit description */
            description ? : string;
            /** Credit id */
            id: number;
            /** Use credits on following products */
            products ? : string[];
            /** Total credit */
            total_credit: order.Price;
            /** Used credit */
            used_credit: order.Price;
            /** Credit validity */
            validity ? : cloud.common.VoucherValidity;
            /** Voucher code */
            voucher ? : string;
        }
        /** An execution of the backup workflow */
        interface Execution {
            /** Last date of cron trigger execution */
            executedAt: string;
            /** Execution state */
            state: cloud.ExecutionStateEnum;
            /** Information about state */
            stateInfo: string;
        }
        /** Enum values for State */
        enum ExecutionStateEnum {
            "CANCELED",
            "ERROR",
            "IDLE",
            "PAUSED",
            "RUNNING",
            "SUCCESS"
        }
        /** Enum values for IpCountry */
        enum IpCountryEnum {
            "au",
            "be",
            "ca",
            "cz",
            "de",
            "es",
            "fi",
            "fr",
            "ie",
            "it",
            "lt",
            "nl",
            "pl",
            "pt",
            "sg",
            "uk",
            "us"
        }
        /** A public cloud lab permits to activate a feature in beta */
        interface Lab {
            /** Lab ID */
            id: string;
            /** Lab name */
            name: string;
            /** Lab status */
            status: cloud.LabStatusEnum;
        }
        /** List of required agreements to activate the lab */
        interface LabAgreements {
            /** List of agreements already accepted to activate the lab */
            accepted: number[];
            /** List of agreements to accept before activate the lab */
            toAccept: number[];
        }
        /** Enum values for Status */
        enum LabStatusEnum {
            "activated",
            "activating",
            "closed",
            "open"
        }
        /** An operation is an async process on your Project */
        interface Operation {
            /** The action of the operation */
            action: string;
            /** The completed date of the operation */
            completedAt ? : string;
            /** The creation date of the operation */
            createdAt: string;
            /** Unique ID to describe the operation */
            id: string;
            /** The progression in percentage of the operation */
            progress: number;
            /** Affected regions of the operation */
            regions ? : string[];
            /** Affected resource of the operation */
            resourceId ? : string;
            /** The started date of the operation */
            startedAt ? : string;
            /** Operation status */
            status: cloud.OperationStatusEnum;
            /** Sub-operations of the operation */
            subOperations ? : cloud.SubOperation[];
        }
        /** Enum values for Status */
        enum OperationStatusEnum {
            "completed",
            "created",
            "in-error",
            "in-progress",
            "unknown"
        }
        /** Project */
        interface Project {
            /** Project access */
            access: cloud.AccessTypeEnum;
            /** Project creation date */
            creationDate: string;
            /** Description of your project */
            description ? : string;
            /** Expiration date of your project. After this date, your project will be deleted */
            expiration ? : string;
            /** Manual quota prevent automatic quota upgrade */
            manualQuota: boolean;
            /** Project order id */
            orderId ? : number;
            /** Order plan code */
            planCode: string;
            /** Project name */
            projectName ? : string;
            /** Project id */
            project_id: string;
            /** Current status */
            status: cloud.project.ProjectStatusEnum;
            /** Project unleashed */
            unleash: boolean;
        }
        /** Missing description */
        interface ProjectActivateMonthlyBillingCreation {
            /** Instance ids and regions */
            instances: cloud.instance.MonthlyInstanceBulkParams[];
        }
        /** Missing description */
        interface ProjectContainerRegistryCreation {
            /** Name of the new registry */
            name: string;
            /** ID of the plan to use for the new registry */
            planID: string;
            /** Region where to deploy the registry.  Get available regions with /cloud/project/{serviceName}/capabilities/containerRegistry. */
            region: string;
        }
        /** Missing description */
        interface ProjectContainerRegistryUpdate {
            /** New registry name */
            name: string;
        }
        /** Missing description */
        interface ProjectContainerRegistryUsersCreation {
            /** New user email */
            email ? : string;
            /** New user login */
            login ? : string;
        }
        /** Missing description */
        interface ProjectInstanceBulkCreation {
            /** Create an autobackup workflow after instance start up */
            autobackup ? : cloud.instance.AutoBackup;
            /** Instance flavor id */
            flavorId: string;
            /** Start instance in group */
            groupId ? : string;
            /** Instance image id */
            imageId ? : string;
            /** Active monthly billing */
            monthlyBilling ? : boolean;
            /** Instance name */
            name: string;
            /** Create network interfaces */
            networks ? : cloud.instance.NetworkBulkParams[];
            /** Number of instances you want to create */
            number: number;
            /** Instance region */
            region: string;
            /** SSH keypair id */
            sshKeyId ? : string;
            /** Configuration information or scripts to use upon launch */
            userData ? : text;
            /** Specify a volume id to boot from it */
            volumeId ? : string;
        }
        /** Missing description */
        interface ProjectInstanceCreation {
            /** Create an autobackup workflow after instance start up */
            autobackup ? : cloud.instance.AutoBackup;
            /** Instance flavor id */
            flavorId: string;
            /** Start instance in group */
            groupId ? : string;
            /** Instance image id */
            imageId ? : string;
            /** Active monthly billing */
            monthlyBilling ? : boolean;
            /** Instance name */
            name: string;
            /** Create network interfaces */
            networks ? : cloud.instance.NetworkParams[];
            /** Instance region */
            region: string;
            /** SSH keypair id */
            sshKeyId ? : string;
            /** Configuration information or scripts to use upon launch */
            userData ? : text;
            /** Specify a volume id to boot from it */
            volumeId ? : string;
        }
        /** Missing description */
        interface ProjectInstanceGroupCreation {
            /** instance group name */
            name: string;
            /** Instance region */
            region: string;
            /** Instance group type */
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        /** Missing description */
        interface ProjectInstanceInterfaceCreation {
            /** Static ip (Can only be defined for private networks) */
            ip ? : string;
            /** Network id */
            networkId: string;
        }
        /** Missing description */
        interface ProjectInstanceRebootCreation {
            /** Reboot type (default soft) */
            type: cloud.instance.RebootTypeEnum;
        }
        /** Missing description */
        interface ProjectInstanceReinstallCreation {
            /** Image to reinstall */
            imageId: string;
        }
        /** Missing description */
        interface ProjectInstanceRescueModeCreation {
            /** Image to boot on */
            imageId ? : string;
            /** Enable rescue mode */
            rescue: boolean;
        }
        /** Missing description */
        interface ProjectInstanceResizeCreation {
            /** Flavor id */
            flavorId: string;
        }
        /** Missing description */
        interface ProjectInstanceSnapshotCreation {
            /** Snapshot name */
            snapshotName: string;
        }
        /** Missing description */
        interface ProjectInstanceUpdate {
            /** Instance new name */
            instanceName: string;
        }
        /** Missing description */
        interface ProjectIpFailoverAttachCreation {
            /** Attach failover ip to instance */
            instanceId: string;
        }
        /** Missing description */
        interface ProjectKubeCreation {
            /** Kubernetes cluster customization */
            customization ? : cloud.ProjectKubeCustomization;
            /** Selected mode for kube-proxy */
            kubeProxyMode: cloud.kube.KubeProxyModeEnum;
            /** Kubernetes cluster name */
            name: string;
            /** Nodepool to init with cluster creation */
            nodepool: cloud.ProjectKubeCreationNodePool;
            /** The private network configuration. */
            privateNetworkConfiguration: cloud.kube.PrivateNetworkConfiguration;
            /** OpenStack private network (or vrack) ID to bind to cluster */
            privateNetworkId: string;
            /** Kubernetes OpenStack region */
            region: string;
            /** Enum values for UpdatePolicy */
            updatePolicy ? : cloud.kube.UpdatePolicyEnum;
            /** Kubernetes version to install */
            version: cloud.kube.VersionEnum;
        }
        /** Missing description */
        interface ProjectKubeCreationNodePool {
            /** Enable anti affinity groups for nodes in the pool */
            antiAffinity ? : boolean;
            /** Enable the auto-scaling on the pool */
            autoscale ? : boolean;
            /** Number of nodes to instantiate (1 by default) */
            desiredNodes: number;
            /** Nodes flavor */
            flavorName: string;
            /** Higher limit you accept for the desiredNodes value (100 by default) */
            maxNodes: number;
            /** Lower limit you accept for the desiredNodes value (0 by default) */
            minNodes: number;
            /** Enable monthly billing for nodes in the pool */
            monthlyBilled ? : boolean;
            /** NodePool name */
            name: string;
            /** NodePool template to apply to each children nodes */
            template: cloud.kube.NodePoolTemplate;
        }
        /** Cluster customization */
        interface ProjectKubeCustomization {
            /** Kubernetes cluster api server customization */
            apiServer ? : cloud.ProjectKubeCustomizationAPIServer;
            /** Kubernetes cluster kube-proxy customization */
            kubeProxy ? : cloud.ProjectKubeCustomizationKubeProxy;
        }
        /** Cluster API server customization */
        interface ProjectKubeCustomizationAPIServer {
            /** Kubernetes cluster api server admission plugins customization */
            admissionPlugins ? : cloud.ProjectKubeCustomizationAPIServerAdmissionPlugins;
        }
        /** Cluster API server admission plugins customization */
        interface ProjectKubeCustomizationAPIServerAdmissionPlugins {
            /** Array of disabled admission plugins */
            disabled ? : cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[];
            /** Array of enabled admission plugins */
            enabled ? : cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[];
        }
        /** Enum admission plugins */
        enum ProjectKubeCustomizationAPIServerAdmissionPluginsEnum {
            "AlwaysPullImages",
            "NodeRestriction"
        }
        /** Cluster kube-proxy customization: iptables and ipvs configurations can both be set at the same time, kube-proxy will use the one according to the cluster's kubeProxyMode value */
        interface ProjectKubeCustomizationKubeProxy {
            /** Kubernetes cluster kube-proxy customization of iptables specific config (durations format is RFC3339 duration, e.g. 'PT60S') */
            iptables ? : cloud.ProjectKubeCustomizationKubeProxyIptables;
            /** Kubernetes cluster kube-proxy customization of ipvs specific config (durations format is RFC3339 duration, e.g. 'PT60S') */
            ipvs ? : cloud.ProjectKubeCustomizationKubeProxyIpvs;
        }
        /** Configuration used when kube-proxy is configured with iptables mode (durations format is RFC3339 duration, e.g. 'PT60S') */
        interface ProjectKubeCustomizationKubeProxyIptables {
            /** minSyncPeriod is the minimum period that iptables rules are refreshed, in RFC3339 duration format (e.g. 'PT60S') */
            minSyncPeriod ? : duration;
            /** syncPeriod is the period that iptables rules are refreshed, in RFC3339 duration format (e.g. 'PT60S'). Must be greater than 0 */
            syncPeriod ? : duration;
        }
        /** Configuration used when kube-proxy is configured with ipvs mode (durations format is RFC3339 duration, e.g. 'PT60S') */
        interface ProjectKubeCustomizationKubeProxyIpvs {
            /** minSyncPeriod is the minimum period that ipvs rules are refreshed in RFC3339 duration format (e.g. 'PT60S') */
            minSyncPeriod ? : duration;
            /** ipvs scheduler */
            scheduler ? : cloud.kube.KubeProxyIpvsSchedulerEnum;
            /** syncPeriod is the period that ipvs rules are refreshed in RFC3339 duration format (e.g. 'PT60S'). Must be greater than 0 */
            syncPeriod ? : duration;
            /** tcpFinTimeout is the timeout value used for IPVS TCP sessions after receiving a FIN in RFC3339 duration format (e.g. 'PT60S'). The default value is 'PT0S', which preserves the current timeout value on the system */
            tcpFinTimeout ? : duration;
            /** tcpTimeout is the timeout value used for idle IPVS TCP sessions in RFC3339 duration format (e.g. 'PT60S'). The default value is 'PT0S', which preserves the current timeout value on the system. Cannot be set between 'PT0S' and 'PT5S', in order to prevent in-cluster networking issues. */
            tcpTimeout ? : duration;
            /** udpTimeout is the timeout value used for IPVS UDP packets in RFC3339 duration format (e.g. 'PT60S'). The default value is 'PT0S', which preserves the current timeout value on the system */
            udpTimeout ? : duration;
        }
        /** Missing description */
        interface ProjectKubeIpRestrictionUpsert {
            /** List of ips to add to the cluster api-server restrictions (format with /subnet available) */
            ips: string[];
        }
        /** Missing description */
        interface ProjectKubeNodePoolAutoscalingParams {
            /** How long a node should be unneeded before it is eligible for scale down */
            scaleDownUnneededTimeSeconds: number;
            /** How long an unready node should be unneeded before it is eligible for scale down */
            scaleDownUnreadyTimeSeconds: number;
            /** Sum of cpu or memory of all pods running on the node divided by node's corresponding allocatable resource, below which a node can be considered for scale down */
            scaleDownUtilizationThreshold: double;
        }
        /** Missing description */
        interface ProjectKubeNodePoolCreation {
            /** Enable anti affinity groups for nodes in the pool */
            antiAffinity ? : boolean;
            /** Enable the auto-scaling on the pool */
            autoscale ? : boolean;
            /** Autoscaling customization parameters */
            autoscaling: cloud.ProjectKubeNodePoolAutoscalingParams;
            /** Number of nodes to instantiate (1 by default) */
            desiredNodes: number;
            /** Nodes flavor */
            flavorName: string;
            /** Higher limit you accept for the desiredNodes value (100 by default) */
            maxNodes: number;
            /** Lower limit you accept for the desiredNodes value (0 by default) */
            minNodes: number;
            /** Enable monthly billing for nodes in the pool */
            monthlyBilled ? : boolean;
            /** NodePool name */
            name: string;
            /** NodePool template to apply to each children nodes */
            template: cloud.kube.NodePoolTemplate;
        }
        /** Missing description */
        interface ProjectKubeNodePoolUpdate {
            /** Enable the auto-scaling on the pool */
            autoscale ? : boolean;
            /** Autoscaling customization parameters */
            autoscaling: cloud.ProjectKubeNodePoolAutoscalingParams;
            /** New number of nodes wanted in the nodepool */
            desiredNodes: number;
            /** New maximal number of nodes wanted in the nodepool */
            maxNodes: number;
            /** New minimal number of nodes wanted in the nodepool */
            minNodes: number;
            /** List of specific node IDs, openstack instance IDs or Node.Spec.providerIDs to delete during downscale */
            nodesToRemove: string[];
            /** NodePool template to apply to each children nodes */
            template: cloud.kube.NodePoolTemplate;
        }
        /** Creation model for OIDC */
        interface ProjectKubeOpenIdConnectCreation {
            /** Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. */
            caContent ? : string;
            /** Client ID */
            clientId: string;
            /** JWT claim to use as the user's group. If the claim is present it must be an array of strings. */
            groupsClaim ? : string[];
            /** Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. */
            groupsPrefix ? : string;
            /** Issuer URL */
            issuerUrl: string;
            /** key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. */
            requiredClaim ? : string[];
            /** The signing algorithms accepted. Default is "RS256". */
            signingAlgorithms ? : cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
            /** JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. */
            usernameClaim ? : string;
            /** Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. */
            usernamePrefix ? : string;
        }
        /** Update model for OIDC */
        interface ProjectKubeOpenIdConnectUpdate {
            /** Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. */
            caContent ? : string;
            /** Client ID */
            clientId: string;
            /** JWT claim to use as the user's group. If the claim is present it must be an array of strings. */
            groupsClaim ? : string[];
            /** Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. */
            groupsPrefix ? : string;
            /** Issuer URL */
            issuerUrl: string;
            /** key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. */
            requiredClaim ? : string[];
            /** The signing algorithms accepted. Default is "RS256". */
            signingAlgorithms ? : cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
            /** JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. */
            usernameClaim ? : string;
            /** Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. */
            usernamePrefix ? : string;
        }
        /** Model object to reset kube cluster */
        interface ProjectKubeResetCreation {
            /** Kubernetes cluster customization */
            customization: cloud.ProjectKubeCustomization;
            /** Selected mode for kube-proxy */
            kubeProxyMode: cloud.kube.KubeProxyModeEnum;
            /** New cluster name */
            name: string;
            /** The private network configuration. */
            privateNetworkConfiguration: cloud.kube.PrivateNetworkConfiguration;
            /** OpenStack private network (or vrack) ID to bind to cluster */
            privateNetworkId: string;
            /** Enum values for UpdatePolicy */
            updatePolicy: cloud.kube.UpdatePolicyEnum;
            /** Kubernetes version to use after reset, by default it keeps the current version */
            version: cloud.kube.VersionEnum;
            /** Worker nodes reset policy, default is delete */
            workerNodesPolicy: cloud.kube.ResetWorkerNodesPolicyEnum;
        }
        /** Missing description */
        interface ProjectKubeRestart {
            /** Force restarting control plane apiserver (will create a slight downtime) */
            force ? : boolean;
        }
        /** Missing description */
        interface ProjectKubeUpdate {
            /** Cluster new name */
            name: string;
            /** Enum values for UpdatePolicy */
            updatePolicy: cloud.kube.UpdatePolicyEnum;
        }
        /** Missing description */
        interface ProjectKubeUpdateCreation {
            /** Force redeploying the control plane / reinstalling the nodes regardless of their current version */
            force ? : boolean;
            /** The update strategy to apply on your service (next patch or minor version) */
            strategy: cloud.kube.UpdateStrategyEnum;
        }
        /** Missing description */
        interface ProjectKubeUpdatePolicyUpdate {
            /** Update policy */
            updatePolicy: cloud.kube.UpdatePolicyEnum;
        }
        /** Missing description */
        interface ProjectMigrationUpdate {
            /** Migration date (RFC3339) */
            date: string;
        }
        /** Missing description */
        interface ProjectNetworkPrivateCreation {
            /** Network name */
            name: string;
            /** Region where to activate private network. No parameters means all region */
            regions ? : string[];
            /** Vland id, between 0 and 4000. 0 value means no vlan. */
            vlanId ? : number;
        }
        /** Missing description */
        interface ProjectNetworkPrivateRegionCreation {
            /** Region to active on your network */
            region: string;
        }
        /** Missing description */
        interface ProjectNetworkPrivateSubnetCreation {
            /** Enable DHCP */
            dhcp: boolean;
            /** Last IP for this region (eg: 192.168.1.24) */
            end: string;
            /** Global network with cidr (eg: 192.168.1.0/24) */
            network: string;
            /** Set to true if you don't want to set a default gateway IP */
            noGateway: boolean;
            /** Region where this subnet will be created */
            region: string;
            /** First IP for this region (eg: 192.168.1.12) */
            start: string;
        }
        /** Missing description */
        interface ProjectNetworkPrivateSubnetUpdate {
            /** Set to true if you don't want to set a default gateway IP */
            dhcp: boolean;
            /** Set to true if you want to disable the default gateway */
            disableGateway: boolean;
            /** Gateway IP (this field is used if noGateway = false) */
            gatewayIp ? : string;
        }
        /** Missing description */
        interface ProjectNetworkPrivateUpdate {
            /** name */
            name: string;
        }
        /** Missing description */
        interface ProjectRegionCreation {
            /** Region to add on your project */
            region: string;
        }
        /** Missing description */
        interface ProjectRegionQuotaCreation {
            /** Name of the new quota */
            name: string;
        }
        /** Missing description */
        interface ProjectRegionWorkflowBackupCreation {
            /** Unix Cron pattern (eg: '* * * * *') */
            cron: string;
            /** Instance ID to backup */
            instanceId: string;
            /** Number of execution to process before ending the job. Null value means that the job will never end. */
            maxExecutionCount ? : number;
            /** Name of your backup job */
            name: string;
            /** Number of backup to keep */
            rotation: number;
        }
        /** Missing description */
        interface ProjectSshkeyCreation {
            /** SSH key name */
            name: string;
            /** SSH public key */
            publicKey: string;
            /** Region to create SSH key */
            region ? : string;
        }
        /** Missing description */
        interface ProjectStorageCorsCreation {
            /** Allow this origin */
            origin: string;
        }
        /** Missing description */
        interface ProjectStorageCreation {
            /** Archive container flag */
            archive: boolean;
            /** Container name */
            containerName: string;
            /** Region */
            region: string;
        }
        /** Missing description */
        interface ProjectStoragePublicUrlCreation {
            /** Temporary URL expiration */
            expirationDate: string;
            /** Object name */
            objectName: string;
        }
        /** Missing description */
        interface ProjectStorageUpdate {
            /** Container type */
            containerType ? : cloud.storage.TypeEnum;
        }
        /** Missing description */
        interface ProjectStorageUserCreation {
            /** User description */
            description ? : string;
            /** User right (all, read, write) */
            right: cloud.storage.RightEnum;
        }
        /** Missing description */
        interface ProjectUserCreation {
            /** User description */
            description ? : string;
            /** Openstack keystone role name */
            role ? : cloud.user.RoleEnum;
            /** Openstack keystone roles names */
            roles ? : cloud.user.RoleEnum[];
        }
        /** Missing description */
        interface ProjectUserRoleCreation {
            /** Role id */
            roleId: string;
        }
        /** Missing description */
        interface ProjectUserRoleUpdate {
            /** Roles ids */
            rolesIds: string[];
        }
        /** Missing description */
        interface ProjectUserTokenCreation {
            /** User password */
            password: string;
        }
        /** Missing description */
        interface ProjectVolumeAttachCreation {
            /** Instance id */
            instanceId: string;
        }
        /** Missing description */
        interface ProjectVolumeCreation {
            /** Volume description */
            description ? : string;
            /** Id of image to create a bootable volume */
            imageId ? : string;
            /** Volume name */
            name ? : string;
            /** Volume region */
            region: string;
            /** Volume size (in GiB) */
            size: number;
            /** Source snapshot id */
            snapshotId ? : string;
            /** Volume type */
            type: cloud.volume.VolumeTypeEnum;
        }
        /** Missing description */
        interface ProjectVolumeDetachCreation {
            /** Instance id */
            instanceId: string;
        }
        /** Missing description */
        interface ProjectVolumeSnapshotCreation {
            /** Snapshot description */
            description ? : string;
            /** Snapshot name */
            name ? : string;
        }
        /** Missing description */
        interface ProjectVolumeUpdate {
            /** Volume description */
            description ? : string;
            /** Volume name */
            name ? : string;
        }
        /** Missing description */
        interface ProjectVolumeUpsizeCreation {
            /** New volume size (in GiB) (must be greater than current one) */
            size: number;
        }
        /** Details about your region */
        interface Region {
            /** Region continent code */
            continentCode: cloud.RegionContinentEnum;
            /** Location of the datacenter where the region is */
            datacenterLocation: string;
            /** Allowed countries for failover ip */
            ipCountries: cloud.IpCountryEnum[];
            /** Region name */
            name: string;
            /** Details about components status */
            services: cloud.Component[];
            /** Openstack region status */
            status: cloud.RegionStatusEnum;
        }
        /** Enum values for ContinentCode */
        enum RegionContinentEnum {
            "ASIA",
            "EU",
            "NA",
            "US"
        }
        /** Enum values for Status */
        enum RegionStatusEnum {
            "DOWN",
            "MAINTENANCE",
            "UP"
        }
        /** Enum values for Status */
        enum ServiceStatusEnum {
            "DOWN",
            "UP"
        }
        /** Container */
        interface StorageContainer {
            /** The date and timestamp when the resource was created */
            createdAt: string;
            /** Container name */
            name: string;
            /** Container objects */
            objects: cloud.StorageObject[];
            /** Container total objects count */
            objectsCount: number;
            /** Container total objects size (bytes) */
            objectsSize: number;
            /** Container owner user ID */
            ownerId: number;
            /** Container region */
            region: string;
            /** Container virtual host */
            virtualHost: string;
        }
        /** Create a container */
        interface StorageContainerCreation {
            /** Container name */
            name: string;
            /** Container owner user ID */
            ownerId ? : number;
        }
        /** Object */
        interface StorageObject {
            /** ETag */
            etag: string;
            /** Key */
            key: string;
            /** Last modification date */
            lastModified: string;
            /** Size (bytes) */
            size: number;
        }
        /** A sub-operation is a child of an operation on your Project */
        interface SubOperation {
            /** The action of the sub-operation */
            action: string;
            /** The completed date of the sub-operation */
            completedAt ? : string;
            /** Unique ID to describe the sub-operation */
            id: string;
            /** The progression in percentage of the sub-operation */
            progress: number;
            /** Affected regions of the sub-operation */
            regions ? : string[];
            /** Affected resource of the sub-operation */
            resourceId ? : string;
            /** The started date of the sub-operation */
            startedAt ? : string;
            /** Sub-operation status */
            status: cloud.OperationStatusEnum;
        }
        /** A vRack allows to connect your OVH infrastructures accross products and datacenters */
        interface Vrack {
            /** Description of your vRack */
            description: string;
            /** Vrack ID */
            id: string;
            /** Name of your vRack */
            name: string;
        }
    }
    namespace complexType {
        /** A numeric value tagged with its unit */
        interface UnitAndValue {
            /** unit */
            unit: string;
            /** value */
            value: T;
        }
        /** Key and value, with proper key strings */
        interface SafeKeyValue {
            /** key */
            key: string;
            /** value */
            value: T;
        }
    }
    namespace nichandle {
        namespace Authentication {
            /** X509 Certificate */
            interface Certificate {
                /** Certificate's expiration */
                expiration: string;
                /** Certificate's subject */
                subject: string;
            }
            /** A group */
            interface Group {
                /** Creation date of this group */
                creation: string;
                /** True if it is an default group. This kind of group can't be edited or deleted */
                defaultGroup: boolean;
                /** Group's description */
                description: string;
                /** Last update of this group */
                lastUpdate: string;
                /** Group's name */
                name: string;
                /** Group's role */
                role: nichandle.Authentication.RoleEnum;
            }
            /** A SAML 2.0 provider */
            interface Provider {
                /** Creation date of the identity provider */
                creation: string;
                /** SAML Extensions to embed inside the SAML requests */
                extensions ? : nichandle.Authentication.ProviderExtensions;
                /** SAML Group attribute name */
                groupAttributeName: string;
                /** IdP's signing certificate */
                idpSigningCertificates: nichandle.Authentication.Certificate[];
                /** Last update of the identity provider */
                lastUpdate: string;
                /** IdP's Single Sign On Service Url */
                ssoServiceUrl: string;
            }
            /** A SAML 2.0 Extension that should be added to SAML requests when using this provider */
            interface ProviderExtensions {
                /** List of SAML RequestedAttribute to add to SAML requestes */
                requestedAttributes ? : nichandle.Authentication.RequestedAttribute[];
            }
            /** A SAML 2.0 requested attribute that should be added to SAML requests when using this provider */
            interface RequestedAttribute {
                /** Expresses that this RequestedAttribute is mandatory (remains advisory) */
                isRequired: boolean;
                /** Name of the SAML RequestedAttribute */
                name: string;
                /** NameFormat of the SAML RequestedAttribute */
                nameFormat ? : string;
                /** List of AttributeValues allowed for this RequestedAttribute */
                values ? : string[];
            }
        }
        namespace accessRestriction {
            /** Accept or deny IP access */
            enum IpRestrictionRuleEnum {
                "accept",
                "deny"
            }
            /** SOTP Two-Factor Authentication */
            interface SOTPAccount {
                /** Creation date */
                creationDate: string;
                /** Last used date */
                lastUsedDate ? : string;
                /** Number of remaining codes */
                remaining: number;
                /** Status of this account */
                status: nichandle.accessRestriction.SOTPStatusEnum;
            }
            /** Describe SOTP secret keys */
            interface SOTPSecret {
                /** codes */
                codes: string[];
            }
            /** Status of SOTP account */
            enum SOTPStatusEnum {
                "disabled",
                "enabled",
                "needCodeValidation",
                "needEmailValidation"
            }
            /** Describe SOTP validation status */
            interface SOTPValidate {
                /** remainingCodes */
                remainingCodes: number;
            }
            /** Sms Two-Factor Authentication */
            interface SmsAccount {
                /** Creation date */
                creationDate: string;
                /** Description of this phone */
                description: string;
                /** The Id of the restriction */
                id: number;
                /** Last used date */
                lastUsedDate ? : string;
                /** Associated phone number */
                phoneNumber: string;
                /** Status of this account */
                status: nichandle.accessRestriction.SmsStatusEnum;
            }
            /** Send secret code */
            interface SmsCode {
                /** challenge */
                challenge: string;
            }
            /** Describe secret key */
            interface SmsSecret {
                /** id */
                id: number;
                /** remainingTry */
                remainingTry: number;
            }
            /** Status of the Sms account */
            enum SmsStatusEnum {
                "disabled",
                "enabled",
                "needCodeValidation",
                "needEmailValidation"
            }
            /** TOTP Two-Factor Authentication */
            interface TOTPAccount {
                /** Creation date */
                creationDate: string;
                /** Description of this TOTP */
                description: string;
                /** The Id of the restriction */
                id: number;
                /** Last used date */
                lastUsedDate ? : string;
                /** Status of this account */
                status: nichandle.accessRestriction.TOTPStatusEnum;
            }
            /** Describe TOTP secret keys */
            interface TOTPSecret {
                /** id */
                id: number;
                /** qrcodeHelper */
                qrcodeHelper: string;
                /** secret */
                secret: string;
            }
            /** Status of TOTP account */
            enum TOTPStatusEnum {
                "disabled",
                "enabled",
                "needCodeValidation",
                "needEmailValidation"
            }
            /** U2F Two-Factor Authentication */
            interface U2FAccount {
                /** Creation date */
                creationDate: string;
                /** Description of this U2F key */
                description: string;
                /** The Id of the restriction */
                id: number;
                /** Last used date */
                lastUsedDate ? : string;
                /** Status of this account */
                status: nichandle.accessRestriction.U2FStatusEnum;
            }
            /** U2F Register Request */
            interface U2FRegisterChallenge {
                /** applicationId */
                applicationId: string;
                /** id */
                id: number;
                /** request */
                request: nichandle.accessRestriction.U2FRegistrationRequest;
            }
            /** Describe U2F RegistrationRequest */
            interface U2FRegistrationRequest {
                /** challenge */
                challenge: string;
                /** version */
                version: string;
            }
            /** U2F Register Request */
            interface U2FSignChallenge {
                /** applicationId */
                applicationId: string;
                /** request */
                request: nichandle.accessRestriction.U2FSignRequest;
            }
            /** Describe U2F SignRequest */
            interface U2FSignRequest {
                /** challenge */
                challenge: string;
                /** keyHandle */
                keyHandle: string;
                /** version */
                version: string;
            }
            /** Status of U2F account */
            enum U2FStatusEnum {
                "disabled",
                "enabled",
                "needCodeValidation"
            }
        }
        namespace changeContact {
            /** Allowed types of contact who can be changed by change contact task */
            enum ContactTypeEnum {
                "contactAdmin",
                "contactBilling",
                "contactTech"
            }
            /** State of contact change task */
            enum TaskStateEnum {
                "aborted",
                "checkValidity",
                "doing",
                "done",
                "error",
                "expired",
                "refused",
                "todo",
                "validatingByCustomers"
            }
        }
        namespace changeEmail {
            /** State of email change task */
            enum TaskStateEnum {
                "aborted",
                "done",
                "refused",
                "todo"
            }
        }
        namespace contactChange {
            /** Task running a contact change on a service */
            interface Task {
                /** Account who asked the contact change */
                askingAccount ? : string;
                /** Contacts to be changed */
                contactTypes: nichandle.changeContact.ContactTypeEnum[];
                /** Date at which the contact change has been finished */
                dateDone ? : string;
                /** Date at which the request has been made */
                dateRequest: string;
                /** Account to change contact from */
                fromAccount: string;
                /** id */
                id: number;
                /** The service on which the task runs */
                serviceDomain ? : string;
                /** Current state of the request */
                state: nichandle.changeContact.TaskStateEnum;
                /** Account to change contact to */
                toAccount: string;
            }
        }
        namespace document {
            /** List of documents added on your account */
            interface Document {
                /** Document creation */
                creationDate: string;
                /** Document expiration */
                expirationDate ? : string;
                /** URL used to get document */
                getUrl: string;
                /** Document id */
                id: string;
                /** Document name */
                name: string;
                /** URL used to put document */
                putUrl: string;
                /** Document size (in bytes) */
                size: number;
                /** Document tags */
                tags: complexType.SafeKeyValue < string > [];
                /** Document validation */
                validationDate ? : string;
            }
        }
        namespace emailChange {
            /** Task running an email change on an account */
            interface Task {
                /** End date of that request */
                dateDone ? : string;
                /** Creation date of that request */
                dateRequest: string;
                /** id */
                id: number;
                /** The email address to change for */
                newEmail: string;
                /** Current state of the request */
                state: nichandle.changeEmail.TaskStateEnum;
            }
        } /** OVH subsidiaries */
        enum OvhSubsidiaryEnum {
            "CZ",
            "DE",
            "ES",
            "EU",
            "FI",
            "FR",
            "GB",
            "IE",
            "IT",
            "LT",
            "MA",
            "NL",
            "PL",
            "PT",
            "SN",
            "TN"
        }
        /** Permission given on the account */
        enum RoleEnum {
            "REGULAR",
            "ADMIN",
            "UNPRIVILEGED",
            "NONE"
        }
        /** Internal customer billing capacities for customer control panel */
        interface BillingCapacities {
            /** Indicates if the debt system has been enabled on the customer account */
            canUseDebtSystem: boolean;
            /** Indicates customer's ability to use postal mailing for invoices */
            canUsePostalMailForInvoices: boolean;
            /** Indicates the mandatory nature of having a valid payment method */
            requiredPaymentMethod: nichandle.RequiredPaymentMethodEnum;
        }
        /** Countries a nichandle can choose */
        enum CountryEnum {
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DG",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EA",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HN",
            "HR",
            "HT",
            "HU",
            "IC",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "UNKNOWN",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW"
        }
        /** Customer currency */
        interface Currency {
            /** Currency code */
            code: string;
            /** Currency symbol */
            symbol: string;
        }
        /** Login restrictions on a development version of the Manager */
        interface DeveloperModeRestriction {
            /** Allow login on your account on a development version of the Manager */
            enabled: boolean;
        }
        /** Domain operation argument */
        interface DomainTaskArgument {
            /** List of accepted formats */
            acceptedFormats ? : domain.DocumentFormatsEnum[];
            /** List of accepted values */
            acceptedValues ? : string[];
            /** Description of the argument */
            description ? : string;
            /** List of impacted field names */
            fields ? : xander.ContactFieldEnum[];
            /** Key of the argument */
            key: string;
            /** Maximum of the content length that you can send */
            maximumSize ? : number;
            /** Minimum of the content length that you can send */
            minimumSize ? : number;
            /** True if the argument is in read only */
            readOnly: boolean;
            /** Template of the content */
            template ? : string;
            /** Type of the argument */
            type: string;
            /** Value of the argument */
            value ? : string;
        }
        /** Domain operation progress */
        interface DomainTaskProgressBar {
            /** Current step of the operation */
            currentStep: domain.OperationStep;
            /** The estimated end date of the task */
            expectedDoneDate ? : string;
            /** All the steps of the operation */
            followUpSteps ? : domain.OperationStep[];
            /** The last update date of the task */
            lastUpdateDate ? : string;
            /** Progress percentage of the task */
            progress: number;
            /** Action possible on task */
            taskActions: domain.OperationActionEnum[];
            /** The status of the task */
            taskStatus: domain.OperationStatusEnum;
        }
        /** Email notification received */
        interface EmailNotification {
            /** Content of the email */
            body: string;
            /** Date at which the email was sent */
            date: string;
            /** ID of the email notification */
            id: number;
            /** Subject of the email */
            subject: string;
        }
        /** All genders a person can choose */
        enum GenderEnum {
            "female",
            "male"
        }
        /** Ip registries */
        enum IpRegistryEnum {
            "ARIN",
            "RIPE"
        }
        /** List of all IP Restrictions */
        interface IpRestriction {
            /** The Id of the restriction */
            id: number;
            /** An IP range where we will apply the rule */
            ip: string;
            /** Accept or deny IP access */
            rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
            /** Send an email if someone try to access with this IP address */
            warning: boolean;
        }
        /** IP Restriction default rule */
        interface IpRestrictionDefaultRule {
            /** Accept or deny access */
            rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
            /** Send an email if someone try to access */
            warning: boolean;
        }
        /** Details about an IP block organisation */
        interface Ipv4Org {
            /** abuse_mailbox */
            abuse_mailbox: string;
            /** address */
            address: string;
            /** city */
            city: string;
            /** country */
            country: nichandle.CountryEnum;
            /** firstname */
            firstname: string;
            /** lastname */
            lastname: string;
            /** organisationId */
            organisationId: string;
            /** phone */
            phone: phoneNumber;
            /** registry */
            registry: nichandle.IpRegistryEnum;
            /** state */
            state ? : string;
            /** zip */
            zip ? : string;
        }
        /** Languages a nichandle can choose */
        enum LanguageEnum {
            "cs_CZ",
            "de_DE",
            "en_AU",
            "en_CA",
            "en_GB",
            "en_IE",
            "en_US",
            "es_ES",
            "fi_FI",
            "fr_CA",
            "fr_FR",
            "fr_MA",
            "fr_SN",
            "fr_TN",
            "it_IT",
            "lt_LT",
            "nl_NL",
            "pl_PL",
            "pt_PT"
        }
        /** Legal forms a nichandle can be registered as */
        enum LegalFormEnum {
            "administration",
            "association",
            "corporation",
            "individual",
            "other",
            "personalcorporation"
        }
        /** Manager preference */
        interface ManagerPreference {
            /** This preference key */
            key: string;
            /** This preference value */
            value: text;
        }
        /** Auto renewal information */
        interface NicAutorenewInfos {
            /** Renewal active or not */
            active: boolean;
            /** give the last renew */
            lastRenew ? : string;
            /** give the renewal day */
            renewDay: number;
        }
        /** Details about your OVH identifier */
        interface Nichandle {
            /** Address of nichandle */
            address ? : string;
            /** Area of nichandle */
            area ? : string;
            /** City of birth */
            birthCity ? : string;
            /** Birth date */
            birthDay ? : string;
            /** City of nichandle */
            city ? : string;
            /** Company National Identification Number */
            companyNationalIdentificationNumber ? : string;
            /** Corporation type */
            corporationType ? : string;
            /** Customer country */
            country: nichandle.CountryEnum;
            /** Customer currency */
            currency: nichandle.Currency;
            /** Your customer code (a numerical value used for identification when contacting support via phone call) */
            customerCode ? : string;
            /** Email address */
            email: string;
            /** Fax number */
            fax ? : string;
            /** First name */
            firstname ? : string;
            /** Italian SDI */
            italianSDI ? : string;
            /** KYC validation state */
            kycValidated ? : boolean;
            /** Language */
            language ? : nichandle.LanguageEnum;
            /** Customer legal form */
            legalform: nichandle.LegalFormEnum;
            /** Customer name */
            name ? : string;
            /** National Identification Number */
            nationalIdentificationNumber ? : string;
            /** Customer identifier */
            nichandle: string;
            /** Name of organisation */
            organisation ? : string;
            /** OVH company */
            ovhCompany: nichandle.OvhCompanyEnum;
            /** OVH subsidiary */
            ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
            /** Phone number */
            phone ? : string;
            /** phoneCountry */
            phoneCountry ? : nichandle.CountryEnum;
            /** Gender */
            sex ? : nichandle.GenderEnum;
            /** Spare email */
            spareEmail ? : string;
            /** Nichandle state */
            state: nichandle.StateEnum;
            /** VAT number */
            vat ? : string;
            /** Zipcode */
            zip ? : string;
        }
        /** SMS notifications */
        interface NichandleSmsNotification {
            /** Receive notification for abuse reports */
            abuse: boolean;
            /** Creation date */
            creationDate: string;
            /** The phone number you want to receive notification on */
            phoneNumber: string;
            /** Status of your notification */
            status: nichandle.NotificationStatusEnum;
            /** Last update date */
            updateDate ? : string;
        }
        /** Status of your notification */
        enum NotificationStatusEnum {
            "ok",
            "waitingForValidation"
        }
        /** OVH companies */
        enum OvhCompanyEnum {
            "kimsufi",
            "ovh",
            "soyoustart"
        }
        /** Indicates the mandatory nature of having a valid payment method */
        enum RequiredPaymentMethodEnum {
            "mandatoryForAutorenew",
            "mandatoryForPostpaid",
            "notMandatory"
        }
        /** States a nichandle can be in */
        enum StateEnum {
            "complete",
            "incomplete"
        }
        /** Sub Account */
        interface SubAccount {
            /** Creation date */
            creationDate: string;
            /** This sub-account description */
            description ? : string;
            /** This sub-account id */
            id: number;
        }
        /** Credentials to interact with the api on behalf of the sub-account */
        interface SubAccountConsumerKey {
            /** The consumer key */
            consumerKey: string;
        }
        /** List of all OVH things you can subscribe to */
        interface Subscription {
            /** Determine whether you are registered or not */
            registered ? : boolean;
            /** The type of subscription */
            type: string;
        }
        /** A user */
        interface User {
            /** Creation date of this user */
            creation: string;
            /** User's description */
            description: string;
            /** User's email */
            email: string;
            /** User's group */
            group: string;
            /** Last update of this user */
            lastUpdate: string;
            /** User's login suffix */
            login: string;
            /** When the user changed his password for the last time */
            passwordLastUpdate: string;
            /** Current user's status */
            status: nichandle.UserStatus;
        }
        /** Status of a User */
        enum UserStatus {
            "OK",
            "DISABLED",
            "PASSWORD_CHANGE_REQUIRED"
        }
        /** VIP Status by Universe */
        interface VipStatus {
            /** Is account VIP for Cloud Universe */
            cloud: boolean;
            /** Is account VIP for Dedicated Universe */
            dedicated: boolean;
            /** Is account VIP for Telecom Universe */
            telecom: boolean;
            /** Is account VIP for Web Universe */
            web: boolean;
        }
        /** Voucher Status and Information */
        interface VoucherStatus {
            /** Is voucher valid */
            validity: boolean;
        }
        /** Email notification */
        interface emailNotification {
            /** This email body */
            body: text;
            /** This email date */
            date: string;
            /** This email Id */
            id: number;
            /** This email subject */
            subject: string;
        }
        /** Customer IPXE scripts */
        interface ipxe {
            /** Name of this script */
            name: string;
            /** Content of your IPXE script */
            script: text;
        }
        /** Customer public SSH key, can be used for rescue netboot or server access after reinstallation */
        interface sshKey {
            /** True when this public SSH key is used for rescue mode and reinstallations */
            default: boolean;
            /** ASCII encoded public SSH key */
            key: string;
            /** Name of this public SSH key */
            keyName: string;
        }
    }
    namespace order {
        namespace cart {
            /** Representation of a generic product */
            interface GenericProductDefinition {
                /** Product offer identifier */
                planCode: string;
                /** Prices of the product offer */
                prices: order.cart.GenericProductPricing[];
                /** Name of the product */
                productName: string;
                /** Product type */
                productType: order.cart.GenericProductTypeEnum;
            }
            /** Representation of a product pricing */
            interface GenericProductPricing {
                /** Capacities of the pricing (type of pricing) */
                capacities: order.cart.GenericProductPricingCapacitiesEnum[];
                /** Description of the pricing */
                description: string;
                /** Duration for ordering the product */
                duration: duration;
                /** Interval of renewal */
                interval: number;
                /** Maximum quantity that can be ordered */
                maximumQuantity ? : number;
                /** Maximum repeat for renewal */
                maximumRepeat ? : number;
                /** Minimum quantity that can be ordered */
                minimumQuantity: number;
                /** Minimum repeat for renewal */
                minimumRepeat: number;
                /** Price of the product */
                price: order.Price;
                /** Price of the product in micro-centims */
                priceInUcents: number;
                /** Pricing model identifier */
                pricingMode: string;
                /** Pricing type */
                pricingType: order.cart.GenericProductPricingTypeEnum;
            }
            /** Capacity of a pricing (type) */
            enum GenericProductPricingCapacitiesEnum {
                "consumption",
                "detach",
                "downgrade",
                "dynamic",
                "installation",
                "renew",
                "upgrade"
            }
            /** Type of a pricing */
            enum GenericProductPricingTypeEnum {
                "consumption",
                "purchase",
                "rental"
            }
            /** Type of a product */
            enum GenericProductTypeEnum {
                "cloud_service",
                "delivery",
                "deposit",
                "domain",
                "implementation_services",
                "saas_license",
                "shipping",
                "storage"
            }
        } /** Currency code */
        enum CurrencyCodeEnum {
            "AUD",
            "CAD",
            "CZK",
            "EUR",
            "GBP",
            "INR",
            "LTL",
            "MAD",
            "N/A",
            "PLN",
            "SGD",
            "TND",
            "USD",
            "XOF",
            "points"
        }
        /** Price with its currency and textual representation */
        interface Price {
            /** Currency code */
            currencyCode: order.CurrencyCodeEnum;
            /** Textual representation */
            text: string;
            /** The effective price */
            value: double;
        }
        /** A contract */
        interface Contract {
            /** Terms of the contract */
            content: text;
            /** Name of the contract */
            name: string;
            /** URL to download the contract */
            url: string;
        }
        /** An order */
        interface Order {
            /** List of contracts related to the order */
            contracts: order.Contract[];
            /** Details of the order */
            details: order.OrderDetail[];
            /** Identifier of the order */
            orderId ? : number;
            /** Prices of the order including with and without taxes */
            prices: order.OrderPrices;
            /** URL to download the order */
            url ? : string;
        }
        /** Detail of an order */
        interface OrderDetail {
            /** Cart Item ID the details is related to */
            cartItemID ? : number;
            /** Description of the detail */
            description: string;
            /** Type of detail */
            detailType ? : order.OrderDetailTypeEnum;
            /** Service name */
            domain: string;
            /** Original price of the detail before reduction application */
            originalTotalPrice: order.Price;
            /** Quantity of the service */
            quantity: number;
            /** Total price of the reduction */
            reductionTotalPrice: order.Price;
            /** List of reductions applied to the detail */
            reductions: order.Reduction[];
            /** Price total of the services */
            totalPrice: order.Price;
            /** Unitary price of the service */
            unitPrice: order.Price;
        }
        /** Product type of item in order */
        enum OrderDetailTypeEnum {
            "ACCESSORY",
            "CAUTION",
            "CHOOSED",
            "CONSUMPTION",
            "CREATION",
            "DELIVERY",
            "DURATION",
            "GIFT",
            "INSTALLATION",
            "LICENSE",
            "MUTE",
            "OTHER",
            "OUTPLAN",
            "QUANTITY",
            "REFUND",
            "RENEW",
            "SPECIAL",
            "SWITCH",
            "TRANSFER",
            "VOUCHER"
        }
        /** Prices of an order */
        interface OrderPrices {
            /** Price before reduction application */
            originalWithoutTax ? : order.Price;
            /** Price concerning the reduced amount */
            reduction ? : order.Price;
            /** Tax amount */
            tax: order.Price;
            /** Price with tax */
            withTax: order.Price;
            /** Price without tax */
            withoutTax: order.Price;
        }
        /** Order detail reduction */
        interface Reduction {
            /** In which context the reduction is applied */
            context: order.ReductionContextEnum;
            /** Promotion description */
            description: string;
            /** Reduction price applied with this promotion */
            price: order.Price;
            /** Reduction description */
            reductionDescription: string;
            /** Reduction effect, price modification */
            type: order.ReductionTypeEnum;
            /** The reduction value */
            value: order.Price;
        }
        /** Context of the reduction */
        enum ReductionContextEnum {
            "promotion",
            "voucher"
        }
        /** Type of reduction */
        enum ReductionTypeEnum {
            "fixed_amount",
            "forced_amount",
            "percentage"
        }
    }
    namespace service {
        /** Map a possible renew for a specific service */
        interface RenewType {
            /** The service is automatically renewed */
            automatic: boolean;
            /** The service will be deleted at expiration */
            deleteAtExpiration: boolean;
            /** The service forced to be renewed */
            forced: boolean;
            /** The service needs to be manually renewed and paid */
            manualPayment ? : boolean;
            /** period of renew in month */
            period ? : number;
        }
        /** Detailed renewal type of a service */
        enum RenewalTypeEnum {
            "automaticForcedProduct",
            "automaticV2012",
            "automaticV2014",
            "automaticV2016",
            "manual",
            "oneShot",
            "option"
        }
        /** StateEnum */
        enum StateEnum {
            "expired",
            "inCreation",
            "ok",
            "pendingDebt",
            "unPaid"
        }
        /** All future uses you can provide for a service termination */
        enum TerminationFutureUseEnum {
            "NOT_REPLACING_SERVICE",
            "OTHER",
            "SUBSCRIBE_AN_OTHER_SERVICE",
            "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
            "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
        }
        /** All reasons you can provide for a service termination */
        enum TerminationReasonEnum {
            "FEATURES_DONT_SUIT_ME",
            "LACK_OF_PERFORMANCES",
            "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
            "MIGRATED_TO_COMPETITOR",
            "NOT_ENOUGH_RECOGNITION",
            "NOT_NEEDED_ANYMORE",
            "NOT_RELIABLE",
            "NO_ANSWER",
            "OTHER",
            "PRODUCT_DIMENSION_DONT_SUIT_ME",
            "PRODUCT_TOOLS_DONT_SUIT_ME",
            "TOO_EXPENSIVE",
            "TOO_HARD_TO_USE",
            "UNSATIFIED_BY_CUSTOMER_SUPPORT"
        }
    }
    namespace services {
        namespace expanded {
            /** Route of the service */
            interface Route {
                /** Path to use in API */
                path ? : string;
                /** Path with variables applied */
                url ? : string;
                /** Variables to use in the path */
                vars: complexType.SafeKeyValue < string > [];
            }
        } /** Details about a Service */
        interface Service {
            /** Indicates that the service can be set up to be deleted at expiration */
            canDeleteAtExpiration: boolean;
            /** contactAdmin */
            contactAdmin: string;
            /** contactBilling */
            contactBilling: string;
            /** contactTech */
            contactTech: string;
            /** creation */
            creation: string;
            /** domain */
            domain: string;
            /** engagedUpTo */
            engagedUpTo ? : string;
            /** expiration */
            expiration: string;
            /** All the possible renew period of your service in month */
            possibleRenewPeriod ? : number[];
            /** Way of handling the renew */
            renew ? : service.RenewType;
            /** renewalType */
            renewalType: service.RenewalTypeEnum;
            /** serviceId */
            serviceId: long;
            /** status */
            status: service.StateEnum;
        }
    }
    namespace agreements {
        /** The current state of a contract agreement */
        enum AgreementStateEnum {
            "ko",
            "obsolete",
            "ok",
            "todo"
        }
        /** Contract of service */
        interface Contract {
            /** Is this contract currently active or not ? */
            active: boolean;
            /** Date the contract was created on */
            date: string;
            /** Name of of the contract */
            name: string;
            /** URL you can download the contract at */
            pdf: string;
            /** Full text of the contract */
            text: string;
        }
        /** Contract agreement */
        interface ContractAgreement {
            /** State of the agreement */
            agreed: agreements.AgreementStateEnum;
            /** Id of the agreed contract */
            contractId: number;
            /** Date the agreed contract was effective */
            date: string;
            /** Id of the contract */
            id: number;
        }
    }
    namespace api {
        /** API Application */
        interface Application {
            /** applicationId */
            applicationId: number;
            /** applicationKey */
            applicationKey: string;
            /** description */
            description: string;
            /** name */
            name: string;
            /** status */
            status: api.ApplicationStatusEnum;
        }
        /** List of state of an Api Application */
        enum ApplicationStatusEnum {
            "active",
            "blocked",
            "inactive",
            "trusted"
        }
        /** API Credential */
        interface Credential {
            /** If defined, list of ip blocks which are allowed to call API with this credential */
            allowedIPs ? : string[];
            /** applicationId */
            applicationId: number;
            /** creation */
            creation: string;
            /** credentialId */
            credentialId: number;
            /** expiration */
            expiration ? : string;
            /** lastUse */
            lastUse ? : string;
            /** States whether this credential has been created by yourself or by the OVH support team */
            ovhSupport: boolean;
            /** rules */
            rules: auth.AccessRule[];
            /** status */
            status: auth.CredentialStateEnum;
        }
        /** API Log */
        interface Log {
            /** Account which did the Request */
            account: string;
            /** Date of the request */
            date: string;
            /** Source IP of the request */
            ip ? : string;
            /** logId */
            logId: number;
            /** HTTP Method of the request */
            method: http.MethodEnum;
            /** HTTP URI of the request */
            path: string;
            /** API Route called */
            route: string;
        }
    }
    namespace audit {
        /** An audit Log */
        interface Log {
            /** authentication details */
            authDetails ? : audit.LogAuthDetails;
            /** event's date */
            createdAt: string;
            /** IP associated to this event */
            ip ? : string;
            /** specific fields for LOGIN_SUCCESS events */
            loginSuccessDetails ? : audit.LogLoginSuccessDetails;
            /** type of event */
            type: audit.LogTypeEnum;
        }
        /** Authentication details */
        interface LogAuthDetails {
            /** authenticated user details */
            userDetails: audit.LogAuthUserDetails;
        }
        /** Authentication MFA type */
        enum LogAuthMFATypeEnum {
            "BACKUP_CODE",
            "MAIL",
            "NONE",
            "SMS",
            "TOTP",
            "U2F",
            "UNKNOWN"
        }
        /** Authenticated user details */
        interface LogAuthUserDetails {
            /** authentication type */
            type: audit.LogAuthUserTypeEnum;
            /** authenticated user name */
            user ? : string;
        }
        /** Authentication type */
        enum LogAuthUserTypeEnum {
            "ACCOUNT",
            "PROVIDER",
            "USER"
        }
        /** specific fields for LOGIN_SUCCESS events */
        interface LogLoginSuccessDetails {
            /** Used MFA while login */
            mfaType ? : audit.LogAuthMFATypeEnum;
            /** Browser's user agent */
            userAgent: string;
        }
        /** Audit event type */
        enum LogTypeEnum {
            "LOGIN_SUCCESS"
        }
    }
    namespace auth {
        /** Access rule allowed to an application */
        interface AccessRule {
            /** Allowed Method */
            method: auth.HTTPMethodEnum;
            /** Allowed path */
            path: string;
        }
        /** API Application */
        interface ApiApplication {
            /** ID of this Application */
            applicationId: number;
            /** Key of this application */
            applicationKey: string;
            /** Description of this application */
            description: string;
            /** Name of this application */
            name: string;
            /** Status of this application */
            status: auth.ApplicationStatusEnum;
        }
        /** API Credential */
        interface ApiCredential {
            /** If defined, list of ip blocks which are allowed to call API with this credential */
            allowedIPs ? : string[];
            /** ID of associated API Application */
            applicationId: number;
            /** Creation date of this credential */
            creation: string;
            /** ID of this credential */
            credentialId: number;
            /** Expiration date of this credential */
            expiration ? : string;
            /** Last use date of this credential */
            lastUse ? : string;
            /** States whether this credential has been created by yourself or by the OVH support team */
            ovhSupport: boolean;
            /** API routes allowed to this credential */
            rules: auth.AccessRule[];
            /** State of to this credential */
            status: auth.CredentialStateEnum;
        }
        /** All states an API Application can be in */
        enum ApplicationStatusEnum {
            "active",
            "blocked",
            "inactive",
            "trusted"
        }
        /** All states a Credential can be in */
        enum CredentialStateEnum {
            "expired",
            "pendingValidation",
            "refused",
            "validated"
        }
        /** All HTTP methods available */
        enum HTTPMethodEnum {
            "DELETE",
            "GET",
            "POST",
            "PUT"
        }
    }
    namespace billing {
        namespace ItemDetail {
            /** Order data for this Detail */
            interface Order {
                /** The meaning of this order detail */
                action ? : billing.ItemDetail.OrderActionEnum;
                /** Configurations chosen during the order */
                configurations: billing.ItemDetail.OrderConfiguration[];
                /** Plan from /order/cart */
                plan: billing.ItemDetail.OrderPlan;
                /** Type of the detail to match with values inside the catalog */
                type ? : billing.ItemDetail.OrderDetailTypeEnum;
            }
            /** List of order actions */
            enum OrderActionEnum {
                "consumption",
                "detach",
                "installation",
                "renew",
                "revert",
                "upgrade"
            }
            /** Configuration of order */
            interface OrderConfiguration {
                /** Label of the configuration */
                label: string;
                /** Value of the configuration */
                value: string;
            }
            /** List of order detail types */
            enum OrderDetailTypeEnum {
                "plan",
                "product"
            }
            /** Plan data from order */
            interface OrderPlan {
                /** Plan code used when ordering through /order/cart */
                code ? : string;
                /** Duration chosen when ordering through /order/cart (ISO 8601) */
                duration ? : string;
                /** Pricing mode used when ordering through /order/cart */
                pricingMode ? : string;
                /** Product from /order/cart */
                product: billing.ItemDetail.OrderPlanProduct;
                /** Quantity ordered */
                quantity ? : number;
            }
            /** Product data from order */
            interface OrderPlanProduct {
                /** Name of the product used when ordering through /order/cart */
                name ? : string;
            }
        }
        namespace credit {
            namespace balance {
                namespace movement {
                    /** Movement sub object */
                    interface SubObject {
                        /** Sub object ID */
                        id ? : string;
                        /** Sub object name */
                        name ? : string;
                    }
                } /** Part of a balance */
                interface BalanceDetail {
                    /** Balance part amount */
                    amount: order.Price;
                    /** Service ID of this balance part */
                    serviceId ? : long;
                }
                /** Movement already booked on orders */
                interface BookedMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Order ID */
                    orderId: number;
                }
                /** Movement expiring soon */
                interface ExpiringMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Movement creation date */
                    creationDate: string;
                    /** Movement expiration date */
                    expirationDate: string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Object source of this credit movement */
                    sourceObject: billing.credit.balance.movement.SubObject;
                }
                /** Credit balance */
                interface Movement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Balance name */
                    balanceName: string;
                    /** Movement creation date */
                    creationDate: string;
                    /** Object destination of this credit movement */
                    destinationObject ? : billing.credit.balance.movement.SubObject;
                    /** Movement expiration date */
                    expirationDate ? : string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Movement ID */
                    movementId: number;
                    /** Order ID associated to this credit movement */
                    orderId ? : number;
                    /** Object source of this credit movement */
                    sourceObject: billing.credit.balance.movement.SubObject;
                    /** Movement type */
                    type: string;
                }
                /** Balance type */
                enum Type {
                    "PREPAID_ACCOUNT",
                    "VOUCHER",
                    "DEPOSIT",
                    "BONUS"
                }
            } /** Credit balance */
            interface Balance {
                /** Balance amount */
                amount: order.Price;
                /** Balance details, amounts by serviceID */
                balanceDetails: billing.credit.balance.BalanceDetail[];
                /** Balance name */
                balanceName: string;
                /** Movement already booked on orders */
                booked: billing.credit.balance.BookedMovement[];
                /** Balance creation date */
                creationDate: string;
                /** Movement expiring soon */
                expiring: billing.credit.balance.ExpiringMovement[];
                /** Movement expiring soon */
                expiringSummary: billing.credit.balance.ExpiringMovement[];
                /** Balance last update */
                lastUpdate: string;
                /** Balance type */
                type: billing.credit.balance.Type;
            }
        }
        namespace fidelityAccount {
            /** Operations a fidelity account movement can represent */
            enum OperationEnum {
                "bonus",
                "cancel-bonus",
                "cancel-credit",
                "cancel-debit",
                "cancel-pre-debit",
                "credit",
                "debit",
                "pre-credit",
                "pre-debit"
            }
        }
        namespace order {
            namespace associatedObject {
                /** Type of objects an order can be linked to */
                enum TypeEnum {
                    "Bill",
                    "Deposit",
                    "Refund",
                    "ReverseBill",
                    "Withdrawal"
                }
            }
            namespace followUp {
                /** Step history of order follow-up */
                interface History {
                    /** History date of order follow-up */
                    date: string;
                    /** History description of order follow-up */
                    description: string;
                    /** History label of order follow-up */
                    label: billing.order.followUp.HistoryStatusEnum;
                }
                /** History label of order follow-up */
                enum HistoryStatusEnum {
                    "DELIVERY",
                    "FRAUD_CHECK",
                    "FRAUD_DOCS_REQUESTED",
                    "FRAUD_MANUAL_REVIEW",
                    "FRAUD_REFUSED",
                    "INVOICE_IN_PROGRESS",
                    "INVOICE_SENT",
                    "ORDER_ACCEPTED",
                    "ORDER_STARTED",
                    "PAYMENT_CONFIRMED",
                    "PAYMENT_INITIATED",
                    "PAYMENT_RECEIVED",
                    "REGISTERED_PAYMENT_INITIATED"
                }
                /** Step status of order follow-up */
                enum StatusEnum {
                    "DOING",
                    "DONE",
                    "ERROR",
                    "TODO"
                }
                /** Status of order follow-up */
                enum StepEnum {
                    "AVAILABLE",
                    "DELIVERING",
                    "VALIDATED",
                    "VALIDATING"
                }
            }
            namespace paymentMean {
                /** Parameter to give to a payment page */
                interface HttpParameter {
                    /** choice */
                    choice ? : billing.order.paymentMean.HttpParameterChoice[];
                    /** name */
                    name: string;
                    /** value */
                    value ? : string;
                }
                /** Choice for an HTTP multi value parameter */
                interface HttpParameterChoice {
                    /** name */
                    name: string;
                    /** value */
                    value: string;
                }
            } /** The object the processing of the order leaded to */
            interface AssociatedObject {
                /** id */
                id ? : string;
                /** type */
                type ? : billing.order.associatedObject.TypeEnum;
            }
            /** All data needed to use a payment mean */
            interface AvailablePaymentMean {
                /** fields */
                fields ? : billing.order.AvailablePaymentMeanField[];
                /** integration */
                integration: billing.order.PaymentMeanIntegrationEnum;
                /** name */
                name: string;
                /** url */
                url ? : string;
            }
            /** All fields needed for a payment mean integration */
            interface AvailablePaymentMeanField {
                /** key */
                key: string;
                /** options */
                options ? : string[];
                /** type */
                type: billing.order.PaymentMeanFieldTypeEnum;
                /** value */
                value ? : string;
            }
            /** Detailed consumption's retrieval information */
            interface ConsumptionDetails {
                /** Format of the file */
                fileFormat ? : consumption.ConsumptionExportFormatsEnum;
                /** Temporary URL to download detailed consumption */
                fileURL ? : string;
                /** Request's state description */
                message ? : string;
                /** Consumption details export task's identifier */
                taskId: number;
                /** Consumption details export task's status */
                taskStatus: consumption.ConsumptionExportTaskStatusEnum;
            }
            /** Follow up history of an order */
            interface FollowUp {
                /** Step history of order follow-up */
                history: billing.order.followUp.History[];
                /** Step status of order follow-up */
                status: billing.order.followUp.StatusEnum;
                /** Step of order follow-up */
                step: billing.order.followUp.StepEnum;
            }
            /** All possible order status */
            enum OrderStatusEnum {
                "cancelled",
                "cancelling",
                "checking",
                "delivered",
                "delivering",
                "documentsRequested",
                "notPaid",
                "unknown"
            }
            /** Pay with payment method parameter */
            interface PayWithPaymentMethod {
                /** ID of payment method for pay this order */
                id: number;
            }
            /** All data needed to use a payment mean */
            interface PaymentMean {
                /** fee */
                fee: double;
                /** htmlForm */
                htmlForm ? : text;
                /** httpMethod */
                httpMethod: string;
                /** logo */
                logo ? : string;
                /** parameters */
                parameters: billing.order.paymentMean.HttpParameter[];
                /** subType */
                subType ? : string;
                /** url */
                url: string;
            }
            /** Field type of a payment mean */
            enum PaymentMeanFieldTypeEnum {
                "hidden",
                "select",
                "text"
            }
            /** Integration payment mean type */
            enum PaymentMeanIntegrationEnum {
                "GET_FORM",
                "POST_FORM",
                "REDIRECT"
            }
            /** TODO */
            interface PaymentMeans {
                /** creditCard */
                creditCard ? : billing.order.PaymentMean[];
                /** edinar */
                edinar ? : billing.order.PaymentMean[];
                /** fidelityPoints */
                fidelityPoints ? : billing.order.PaymentMean[];
                /** ideal */
                ideal ? : billing.order.PaymentMean[];
                /** multibanco */
                multibanco ? : billing.order.PaymentMean[];
                /** ovhAccount */
                ovhAccount ? : billing.order.PaymentMean[];
                /** paypal */
                paypal ? : billing.order.PaymentMean[];
                /** promotion */
                promotion ? : billing.order.PaymentMean[];
            }
            /** Payment methods */
            interface PaymentMethods {
                /** Payment method available on this order */
                available: payment.method.AvailablePaymentMethod[];
                /** List of registered Payment methods usable on this order */
                paymentMethods: payment.method.PaymentMethod[];
                /** IDs of registered payment method usable on this order */
                registered: number[];
            }
            /** A registered payment mean */
            interface RegisteredPaymentMean {
                /** paymentMean */
                paymentMean: billing.ReusablePaymentMeanEnum;
            }
            /** Retraction reason type */
            enum RetractionReasonEnum {
                "competitor",
                "difficulty",
                "expensive",
                "other",
                "performance",
                "reliability",
                "unused"
            }
        }
        namespace ovhAccount {
            /** Operations an OVH account movement can represent */
            enum OperationEnum {
                "cancel-credit",
                "cancel-debit",
                "cancel-pre-debit",
                "credit",
                "debit",
                "pre-credit",
                "pre-debit"
            }
        }
        namespace voucherAccount {
            /** Operations a voucher account movement can represent */
            enum OperationEnum {
                "cancel-credit",
                "cancel-debit",
                "cancel-pre-debit",
                "credit",
                "debit",
                "pre-credit",
                "pre-debit"
            }
        } /** List of available archive types */
        enum ArchiveTypeEnum {
            "csv",
            "zip"
        }
        /** Available automatic payment means */
        interface AutomaticPaymentMean {
            /** Bank Account */
            bankAccount: boolean;
            /** Credit Card */
            creditCard: boolean;
            /** Deferred invoice payment account for authorized customers */
            deferredPaymentAccount: boolean;
            /** Paypal account */
            paypal: boolean;
        }
        /** Details about a Bill */
        interface Bill {
            /** billId */
            billId: string;
            /** category */
            category: billing.CategoryEnum;
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** Information about a Bill entry */
        interface BillDetail {
            /** billDetailId */
            billDetailId: string;
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** periodEnd */
            periodEnd ? : string;
            /** periodStart */
            periodStart ? : string;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** billing task status */
        enum BillingTaskStatusEnum {
            "cancelled",
            "customerError",
            "doing",
            "done",
            "init",
            "ovhError",
            "todo"
        }
        /** Types of plans */
        enum CategoryEnum {
            "autorenew",
            "earlyrenewal",
            "purchase",
            "purchase-cloud",
            "purchase-servers",
            "purchase-telecom",
            "purchase-web"
        }
        /** Credit balance applied on an Order */
        interface CreditBalance {
            /** Amount applied from the balance */
            amount: order.Price;
            /** Credit balance name */
            balanceName: string;
        }
        /** Details about a deposit */
        interface Deposit {
            /** amount */
            amount: order.Price;
            /** date */
            date: string;
            /** depositId */
            depositId: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** paymentInfo */
            paymentInfo ? : debt.associatedObject.PaymentInfo;
            /** pdfUrl */
            pdfUrl: string;
            /** url */
            url: string;
        }
        /** Information about a Deposit entry */
        interface DepositDetail {
            /** depositDetailId */
            depositDetailId: string;
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Balance of the fidelity account */
        interface FidelityAccount {
            /** alertThreshold */
            alertThreshold ? : number;
            /** balance */
            balance: number;
            /** canBeCredited */
            canBeCredited: boolean;
            /** lastUpdate */
            lastUpdate: string;
            /** openDate */
            openDate: string;
        }
        /** Details about a fidelity account */
        interface FidelityMovement {
            /** amount */
            amount: number;
            /** balance */
            balance: number;
            /** date */
            date: string;
            /** description */
            description: string;
            /** movementId */
            movementId: number;
            /** operation */
            operation: billing.fidelityAccount.OperationEnum;
            /** order */
            order: number;
            /** previousBalance */
            previousBalance: number;
        }
        /** Extensions of a detail */
        interface ItemDetail {
            /** order */
            order: billing.ItemDetail.Order;
        }
        /** Status of your manual domain payment migration */
        interface ManualDomainPaymentStatus {
            /** Total number of domains that needs to be migrated to manual renew mode */
            domainsToMigrate ? : number;
            /** Total number of domains successfully migrated to manual renew mode */
            migratedDomains ? : number;
            /** status */
            status: billing.BillingTaskStatusEnum;
        }
        /** Details about an OVH account */
        interface Movement {
            /** amount */
            amount: order.Price;
            /** balance */
            balance: order.Price;
            /** date */
            date: string;
            /** description */
            description: string;
            /** movementId */
            movementId: number;
            /** operation */
            operation: billing.ovhAccount.OperationEnum;
            /** order */
            order: number;
            /** previousBalance */
            previousBalance: order.Price;
            /** retrievableAmount */
            retrievableAmount: order.Price;
        }
        /** Details about an Order */
        interface Order {
            /** date */
            date ? : string;
            /** expirationDate */
            expirationDate ? : string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** retractionDate */
            retractionDate ? : string;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** Information about a Bill entry */
        interface OrderDetail {
            /** cancelled */
            cancelled: boolean;
            /** description */
            description: string;
            /** detailType */
            detailType ? : order.OrderDetailTypeEnum;
            /** domain */
            domain: string;
            /** orderDetailId */
            orderDetailId: number;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Details about an OVH account */
        interface OvhAccount {
            /** alertThreshold */
            alertThreshold ? : number;
            /** balance */
            balance: order.Price;
            /** canBeCredited */
            canBeCredited: boolean;
            /** isActive */
            isActive: boolean;
            /** lastUpdate */
            lastUpdate: string;
            /** openDate */
            openDate: string;
            /** ovhAccountId */
            ovhAccountId: string;
        }
        /** Details about a payment */
        interface Payment {
            /** paymentDate */
            paymentDate: string;
            /** paymentIdentifier */
            paymentIdentifier ? : string;
            /** paymentType */
            paymentType: billing.PaymentMeanEnum;
        }
        /** All payment means you might have use on an OVH order */
        enum PaymentMeanEnum {
            "cash",
            "chargeback",
            "check",
            "cheque",
            "creditAccount",
            "creditCard",
            "debtAccount",
            "deposit",
            "digitalLaunchPad",
            "edinar",
            "fidelityPoints",
            "free",
            "ideal",
            "incubatorAccount",
            "mandat",
            "multibanco",
            "none",
            "ovhAccount",
            "paymentMandate",
            "paypal",
            "payu",
            "platnosci",
            "refund",
            "rupay",
            "transfer",
            "withdrawal"
        }
        /** Details about a Refund */
        interface Refund {
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** originalBillId */
            originalBillId ? : string;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** refundId */
            refundId: string;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** Information about a Bill entry */
        interface RefundDetail {
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** reference */
            reference: string;
            /** refundDetailId */
            refundDetailId: string;
            /** refundId */
            refundId: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Reusable payment mean type */
        enum ReusablePaymentMeanEnum {
            "CREDIT_CARD",
            "CURRENT_ACCOUNT",
            "DEFERRED_PAYMENT_ACCOUNT",
            "DOMESTIC_CARD",
            "ENTERPRISE",
            "INTERNAL_TRUSTED_ACCOUNT",
            "PAYPAL",
            "RUPAY",
            "SEPA_DIRECT_DEBIT",
            "bankAccount",
            "creditCard",
            "deferredPaymentAccount",
            "fidelityAccount",
            "ovhAccount",
            "paypal"
        }
        /** Information about withdrawal entry */
        interface ReversableBillDetail {
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** reference */
            reference: string;
            /** reverseBillDetailId */
            reverseBillDetailId: string;
            /** reverseBillId */
            reverseBillId: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Details about a bill from customer */
        interface ReverseBill {
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** reverseBillId */
            reverseBillId: string;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** SLA properties */
        interface SlaOperation {
            /** Date of the event that led to SLA */
            date: string;
            /** Description of the SLA operation for this incident */
            description: string;
            /** Date of the end of the SLA */
            endDate ? : string;
            /** SLA identifier */
            id: number;
            /** Sla operation name */
            name: string;
            /** Date of the start of the SLA */
            startDate: string;
        }
        /** Describe all services impacted by SLA */
        interface SlaOperationService {
            /** Service description */
            description: string;
            /** Impacted service name */
            serviceName: string;
            /** SLA plan application */
            slaApplication: string;
            /** SLA plan description */
            slaPlan: string;
        }
        /** Details about a Voucher account */
        interface VoucherAccount {
            /** balance */
            balance: order.Price;
            /** lastUpdate */
            lastUpdate: string;
            /** openDate */
            openDate: string;
            /** voucherAccountId */
            voucherAccountId: string;
        }
        /** Details about a voucher account */
        interface VoucherMovement {
            /** amount */
            amount: order.Price;
            /** balance */
            balance: order.Price;
            /** date */
            date: string;
            /** description */
            description: string;
            /** movementId */
            movementId: number;
            /** operation */
            operation: billing.voucherAccount.OperationEnum;
            /** order */
            order: number;
            /** previousBalance */
            previousBalance: order.Price;
        }
        /** Details about a withdrawal */
        interface Withdrawal {
            /** amount */
            amount: order.Price;
            /** country */
            country: string;
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** url */
            url: string;
            /** withdrawalId */
            withdrawalId: string;
        }
        /** Information about a Withdrawal entry */
        interface WithdrawalDetail {
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
            /** withdrawalDetailId */
            withdrawalDetailId: string;
        }
    }
    namespace carbonCalculator {
        namespace Task {
            /** Status of a calculation task */
            enum TaskStatusEnum {
                "ERROR",
                "IN_PROGRESS",
                "SUCCESS"
            }
        } /** Request body for the calculation of customer's carbon impact */
        interface CalculationRequest {
            /** Month of the requested document (day is ignored) */
            date: string;
        }
        /** Response for request of customer's carbon impact */
        interface CalculationResponse {
            /** ID of the calculation task */
            taskID: string;
        }
        /** Task to generate a carbon impact document */
        interface Task {
            /** Link to the document */
            link ? : string;
            /** Status of the task */
            status: carbonCalculator.Task.TaskStatusEnum;
            /** ID of the task */
            taskID: string;
        }
    }
    namespace consumption {
        /** Export file format */
        enum ConsumptionExportFormatsEnum {
            "csv"
        }
        /** Export task status */
        enum ConsumptionExportTaskStatusEnum {
            "DOING",
            "DONE",
            "ERROR",
            "TODO"
        }
    }
    namespace contact {
        /** Representation of an Address */
        interface Address {
            /** City */
            city: string;
            /** Country */
            country: nichandle.CountryEnum;
            /** First line of the address */
            line1: string;
            /** Second line of the address */
            line2 ? : string;
            /** Third line of the address */
            line3 ? : string;
            /** Others details */
            otherDetails ? : string;
            /** Province name */
            province ? : string;
            /** Zipcode */
            zip: string;
        }
        /** Representation of a Contact */
        interface Contact {
            /** Address for this contact */
            address: contact.Address;
            /** Birth city */
            birthCity ? : string;
            /** Birth Country */
            birthCountry ? : nichandle.CountryEnum;
            /** Birth date */
            birthDay ? : string;
            /** Birth Zipcode */
            birthZip ? : string;
            /** Cellphone number */
            cellPhone ? : phoneNumber;
            /** National identification number of your company */
            companyNationalIdentificationNumber ? : string;
            /** Email address */
            email: string;
            /** Fax number */
            fax ? : phoneNumber;
            /** First name */
            firstName: string;
            /** Gender */
            gender ? : nichandle.GenderEnum;
            /** Contact Identifier */
            id: number;
            /** Language */
            language: nichandle.LanguageEnum;
            /** Last name */
            lastName: string;
            /** Legal form of the contact */
            legalForm: nichandle.LegalFormEnum;
            /** National identification number of the contact */
            nationalIdentificationNumber ? : string;
            /** Nationality */
            nationality ? : nichandle.CountryEnum;
            /** Organisation name */
            organisationName ? : string;
            /** Organisation type */
            organisationType ? : string;
            /** Telephone number */
            phone ? : phoneNumber;
            /** Spare email address */
            spareEmail ? : string;
            /** VAT number */
            vat ? : string;
        }
        /** Extras informations about a field */
        interface FieldInformation {
            /** Name of the field concerned by restrictions */
            fieldName: string;
            /** Indicates if the field is mandatory when editing */
            mandatory: boolean;
            /** Indicates if the field can't be edited */
            readOnly: boolean;
        }
    }
    namespace debt {
        namespace associatedObject {
            /** The payment infos linked to this debt entry */
            interface PaymentInfo {
                /** Optional customer description */
                description ? : string;
                /** Payment mean used for this debt operation */
                paymentType: billing.PaymentMeanEnum;
                /** Public payment mean label */
                publicLabel ? : string;
            }
            /** Type of objects an order can be linked to */
            enum TypeEnum {
                "Bill",
                "DebtOperation",
                "Deposit",
                "Order",
                "OvhAccountMovement",
                "Refund",
                "Withdrawal"
            }
        }
        namespace entry {
            /** The object linked to this debt entry */
            interface AssociatedObject {
                /** id */
                id ? : string;
                /** paymentInfo */
                paymentInfo ? : debt.associatedObject.PaymentInfo;
                /** subId */
                subId ? : string;
                /** type */
                type ? : debt.associatedObject.TypeEnum;
            }
            /** All operations a debt entry can represent */
            enum OperationEnum {
                "BANK_TRANSFER_MANUAL",
                "CANCEL",
                "CASH_MANUAL",
                "CHECK_MANUAL",
                "CREDITCARD",
                "CREDITCARD_AUTOMATIC",
                "CREDITCARD_MANUAL",
                "CREDIT_ACCOUNT_AUTOMATIC",
                "CREDIT_CARD_AUTOMATIC",
                "CREDIT_CARD_MANUAL",
                "CURRENT_ACCOUNT_AUTOMATIC",
                "CURRENT_ACCOUNT_MANUAL",
                "DOMESTIC_CARD_AUTOMATIC",
                "DOMESTIC_CARD_MANUAL",
                "EDINAR_MANUAL",
                "ENTERPRISE_AUTOMATIC",
                "ENTERPRISE_MANUAL",
                "IDEAL_AUTOMATIC",
                "IDEAL_MANUAL",
                "INTERNAL_TRUSTED_ACCOUNT_AUTOMATIC",
                "INTERNAL_TRUSTED_ACCOUNT_MANUAL",
                "MULTIBANCO_AUTOMATIC",
                "MULTIBANCO_MANUAL",
                "ORDER",
                "PAYPAL_AUTOMATIC",
                "PAYPAL_MANUAL",
                "PAYU_AUTOMATIC",
                "PAYU_MANUAL",
                "RECOVERY_TRANSFER_AUTOMATIC",
                "REFUND",
                "REFUND_CHECK",
                "REFUND_CREDITCARD",
                "REFUND_CREDIT_ACCOUNT",
                "REFUND_CREDIT_CARD",
                "REFUND_CURRENT_ACCOUNT",
                "REFUND_DOMESTIC_CARD",
                "REFUND_ENTERPRISE",
                "REFUND_IDEAL",
                "REFUND_INTERNAL_TRUSTED_ACCOUNT",
                "REFUND_LOSS",
                "REFUND_MULTIBANCO",
                "REFUND_PAYPAL",
                "REFUND_PAYU",
                "REFUND_RUPAY",
                "REFUND_SEPA",
                "REFUND_SEPA_DIRECT_DEBIT",
                "REFUND_TRANSFER",
                "REFUND_UNKNOWN",
                "RUPAY_AUTOMATIC",
                "RUPAY_MANUAL",
                "SEPA_AUTOMATIC",
                "SEPA_DIRECT_DEBIT_AUTOMATIC",
                "SEPA_DIRECT_DEBIT_MANUAL",
                "TRANSFER_MANUAL",
                "UNPAID_CHECK",
                "UNPAID_CREDITCARD",
                "UNPAID_CREDIT_ACCOUNT",
                "UNPAID_CREDIT_CARD",
                "UNPAID_CURRENT_ACCOUNT",
                "UNPAID_DOMESTIC_CARD",
                "UNPAID_ENTERPRISE",
                "UNPAID_IDEAL",
                "UNPAID_INTERNAL_TRUSTED_ACCOUNT",
                "UNPAID_MULTIBANCO",
                "UNPAID_PAYPAL",
                "UNPAID_PAYU",
                "UNPAID_RUPAY",
                "UNPAID_SEPA",
                "UNPAID_SEPA_DIRECT_DEBIT",
                "UNPAID_WITHDRAW",
                "WARRANT_MANUAL",
                "WITHDRAW_AUTOMATIC"
            }
            /** All status a debt HistoryOrder entry can be in */
            enum StatusDebtOrderEnum {
                "PAID",
                "REFUNDED",
                "TO_BE_PAID",
                "UNMATURED",
                "UNPAID"
            }
            /** All status a debt entry can be in */
            enum StatusEnum {
                "CANCELLED",
                "DONE",
                "FAILED",
                "PAID",
                "PENDING",
                "TODO"
            }
        } /** Debt balance of the account */
        interface Balance {
            /** active */
            active: boolean;
            /** Amount of debts the account has */
            dueAmount: order.Price;
            /** Amount currently being processed */
            pendingAmount: order.Price;
            /** Reserved amount awaiting payment */
            todoAmount: order.Price;
            /** Unmatured amount for deferred payment term */
            unmaturedAmount: order.Price;
        }
        /** State of a debt */
        interface Debt {
            /** Original amount of the debt */
            amount: order.Price;
            /** Date the debt was created on */
            date: string;
            /** debtId */
            debtId: number;
            /** Amount you still owe for that debt */
            dueAmount: order.Price;
            /** If specified, the debt will not be recovered before that date */
            dueDate ? : string;
            /** The order the debt relates to */
            orderId: number;
            /** Amount currently being processed */
            pendingAmount: order.Price;
            /** Status of a debt */
            status: debt.entry.StatusDebtOrderEnum;
            /** Reserved amount awaiting payment */
            todoAmount: order.Price;
            /** Unmatured amount for deferred payment term */
            unmaturedAmount: order.Price;
        }
        /** Operation that happend on a debt */
        interface Operation {
            /** Amount of the operation */
            amount: order.Price;
            /** Date the operation took place on */
            date: string;
            /** Order id associated to the deposit */
            depositOrderId: number;
            /** operationId */
            operationId: number;
            /** Status of the operation */
            status: debt.entry.StatusEnum;
            /** Type of movement this operation represents */
            type ? : debt.entry.OperationEnum;
        }
    }
    namespace dedicated {
        namespace installationTemplate {
            /** Available installation templates */
            interface Templates {
                /** list of all language available for this template */
                availableLanguages: dedicated.TemplateOsLanguageEnum[];
                /** this template bit format */
                bitFormat: dedicated.server.BitFormatEnum;
                /** category of this template (informative only) */
                category: dedicated.TemplateOsUsageEnum;
                /** Customizable template properties  */
                customization ? : dedicated.TemplateOsProperties;
                /** the default language of this template */
                defaultLanguage: dedicated.TemplateOsLanguageEnum;
                /** information about this template */
                description: string;
                /** the distribution this template is based on */
                distribution: string;
                /** after this date, install of this template will not be possible at OVH */
                endOfInstall: string;
                /** this template family type */
                family: dedicated.TemplateOsTypeEnum;
                /** list of all filesystems available for this template */
                filesystems: dedicated.server.FileSystemEnum[];
                /** This distribution supports hardware raid configuration through the OVH API */
                hardRaidConfiguration ? : boolean;
                /** Inputs */
                inputs ? : dedicated.TemplateOsInput[];
                /** This distribution licensing details */
                license ? : dedicated.TemplateOsInfoLicense;
                /** This distribution supports Logical Volumes (Linux LVM) */
                lvmReady ? : boolean;
                /** Partitioning customization is not available for this OS template */
                noPartitioning: boolean;
                /** This distribution project details */
                project ? : dedicated.TemplateOsInfoProject;
                /** Partitioning customization is available but limited to mirroring for this OS template */
                softRaidOnlyMirroring: boolean;
                /** this template subfamily type */
                subfamily: dedicated.TemplateOsSubfamilyEnum;
                /** This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel */
                supportsDistributionKernel ? : boolean;
                /** This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB */
                supportsGptLabel ? : boolean;
                /** This distribution supports RTM software */
                supportsRTM: boolean;
                /** This distribution supports the microsoft SQL server */
                supportsSqlServer ? : boolean;
                /** This template name */
                templateName: string;
            }
            /** Hardware RAID defined in this partitioning scheme */
            interface hardwareRaid {
                /** Disk list */
                disks: string[];
                /** RAID mode */
                mode: dedicated.TemplateOsHardwareRaidEnum;
                /** Hardware RAID name */
                name: string;
                /** Specifies the creation order of the hardware RAID */
                step: number;
            }
            /** Partitioning schemes available on this template */
            interface templatePartitioningSchemes {
                /** This partitioning scheme name */
                name: string;
                /** on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications) */
                priority: number;
            }
            /**  Partitions defined in this partitioning scheme */
            interface templatePartitions {
                /** Partition filesytem */
                filesystem: dedicated.server.FileSystemEnum;
                /** Partition mount point */
                mountpoint: string;
                /** specifies the creation order of the partition on the disk */
                order: number;
                /** Partition raid */
                raid ? : dedicated.server.PartitionRaidEnum;
                /** Partition size (unit: MB GB TB, MB by default), 0 => rest of the space */
                size: complexType.UnitAndValue < long > ;
                /** Partition type */
                type: dedicated.TemplatePartitionTypeEnum;
                /** Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS */
                volumeName ? : string;
            }
        }
        namespace server {
            /** Available os bit format */
            enum BitFormatEnum {
                "32",
                "64"
            }
            /** FileSystems */
            enum FileSystemEnum {
                "btrfs",
                "ext3",
                "ext4",
                "fat16",
                "none",
                "ntfs",
                "reiserfs",
                "swap",
                "ufs",
                "vmfs5",
                "vmfs6",
                "vmfsl",
                "xfs",
                "zfs"
            }
            /** partition raid type */
            enum PartitionRaidEnum {
                "0",
                "1",
                "10",
                "5",
                "6",
                "7"
            }
        } /** Hardware RAID enum */
        enum TemplateOsHardwareRaidEnum {
            "raid0",
            "raid1",
            "raid10",
            "raid5",
            "raid50",
            "raid6",
            "raid60"
        }
        /** A structure describing some interesting facts about an OS template licensing */
        interface TemplateOsInfoLicense {
            /** OS template license OS details */
            os ? : dedicated.TemplateOsInfoLicenseItem;
            /** OS template license usage details */
            usage ? : dedicated.TemplateOsInfoLicenseItem;
        }
        /** A structure describing some interesting facts about an OS template license item */
        interface TemplateOsInfoLicenseItem {
            /** OS template license item names */
            name ? : dedicated.TemplateOsInfoLicenseItemEnum[];
            /** OS template license item url */
            url ? : string;
        }
        /** Standard license name according to SPDX */
        enum TemplateOsInfoLicenseItemEnum {
            "0BSD",
            "AAL",
            "ADSL",
            "AFL-1.1",
            "AFL-1.2",
            "AFL-2.0",
            "AFL-2.1",
            "AFL-3.0",
            "AGPL-1.0-only",
            "AGPL-1.0-or-later",
            "AGPL-3.0-only",
            "AGPL-3.0-or-later",
            "AMDPLPA",
            "AML",
            "AMPAS",
            "ANTLR-PD",
            "ANTLR-PD-fallback",
            "APAFML",
            "APL-1.0",
            "APSL-1.0",
            "APSL-1.1",
            "APSL-1.2",
            "APSL-2.0",
            "Abstyles",
            "Adobe-2006",
            "Adobe-Glyph",
            "Afmparse",
            "Aladdin",
            "Apache-1.0",
            "Apache-1.1",
            "Apache-2.0",
            "Artistic-1.0",
            "Artistic-1.0-Perl",
            "Artistic-1.0-cl8",
            "Artistic-2.0",
            "BSD-1-Clause",
            "BSD-2-Clause",
            "BSD-2-Clause-Patent",
            "BSD-2-Clause-Views",
            "BSD-3-Clause",
            "BSD-3-Clause-Attribution",
            "BSD-3-Clause-Clear",
            "BSD-3-Clause-LBNL",
            "BSD-3-Clause-Modification",
            "BSD-3-Clause-No-Nuclear-License",
            "BSD-3-Clause-No-Nuclear-License-2014",
            "BSD-3-Clause-No-Nuclear-Warranty",
            "BSD-3-Clause-Open-MPI",
            "BSD-4-Clause",
            "BSD-4-Clause-Shortened",
            "BSD-4-Clause-UC",
            "BSD-Protection",
            "BSD-Source-Code",
            "BSL-1.0",
            "BUSL-1.1",
            "Bahyph",
            "Barr",
            "Beerware",
            "BitTorrent-1.0",
            "BitTorrent-1.1",
            "BlueOak-1.0.0",
            "Borceux",
            "C-UDA-1.0",
            "CAL-1.0",
            "CAL-1.0-Combined-Work-Exception",
            "CATOSL-1.1",
            "CC-BY-1.0",
            "CC-BY-2.0",
            "CC-BY-2.5",
            "CC-BY-3.0",
            "CC-BY-4.0",
            "CC-BY-NC-1.0",
            "CC-BY-NC-2.0",
            "CC-BY-NC-2.5",
            "CC-BY-NC-3.0",
            "CC-BY-NC-4.0",
            "CC-BY-NC-ND-1.0",
            "CC-BY-NC-ND-2.0",
            "CC-BY-NC-ND-2.5",
            "CC-BY-NC-ND-3.0",
            "CC-BY-NC-ND-4.0",
            "CC-BY-NC-SA-1.0",
            "CC-BY-NC-SA-2.0",
            "CC-BY-NC-SA-2.5",
            "CC-BY-NC-SA-3.0",
            "CC-BY-NC-SA-4.0",
            "CC-BY-ND-1.0",
            "CC-BY-ND-2.0",
            "CC-BY-ND-2.5",
            "CC-BY-ND-3.0",
            "CC-BY-ND-4.0",
            "CC-BY-SA-1.0",
            "CC-BY-SA-2.0",
            "CC-BY-SA-2.5",
            "CC-BY-SA-3.0",
            "CC-BY-SA-4.0",
            "CC-PDDC",
            "CC0-1.0",
            "CDDL-1.0",
            "CDDL-1.1",
            "CDLA-Permissive-1.0",
            "CDLA-Sharing-1.0",
            "CECILL-1.0",
            "CECILL-1.1",
            "CECILL-2.0",
            "CECILL-2.1",
            "CECILL-B",
            "CECILL-C",
            "CERN-OHL-1.1",
            "CERN-OHL-1.2",
            "CERN-OHL-P-2.0",
            "CERN-OHL-S-2.0",
            "CERN-OHL-W-2.0",
            "CNRI-Jython",
            "CNRI-Python",
            "CNRI-Python-GPL-Compatible",
            "CPAL-1.0",
            "CPL-1.0",
            "CPOL-1.02",
            "CUA-OPL-1.0",
            "Caldera",
            "ClArtistic",
            "Condor-1.1",
            "Crossword",
            "CrystalStacker",
            "Cube",
            "D-FSL-1.0",
            "DFSG",
            "DOC",
            "DRL-1.0",
            "DSDP",
            "Dotseqn",
            "ECL-1.0",
            "ECL-2.0",
            "EFL-1.0",
            "EFL-2.0",
            "EPICS",
            "EPL-1.0",
            "EPL-2.0",
            "EUDatagrid",
            "EUPL-1.0",
            "EUPL-1.1",
            "EUPL-1.2",
            "Entessa",
            "ErlPL-1.1",
            "Eurosym",
            "FSFAP",
            "FSFUL",
            "FSFULLR",
            "FTL",
            "Fair",
            "Frameworx-1.0",
            "FreeBSD-DOC",
            "FreeImage",
            "GD",
            "GFDL-1.1-invariants-only",
            "GFDL-1.1-invariants-or-later",
            "GFDL-1.1-no-invariants-only",
            "GFDL-1.1-no-invariants-or-later",
            "GFDL-1.1-only",
            "GFDL-1.1-or-later",
            "GFDL-1.2-invariants-only",
            "GFDL-1.2-invariants-or-later",
            "GFDL-1.2-no-invariants-only",
            "GFDL-1.2-no-invariants-or-later",
            "GFDL-1.2-only",
            "GFDL-1.2-or-later",
            "GFDL-1.3-invariants-only",
            "GFDL-1.3-invariants-or-later",
            "GFDL-1.3-no-invariants-only",
            "GFDL-1.3-no-invariants-or-later",
            "GFDL-1.3-only",
            "GFDL-1.3-or-later",
            "GL2PS",
            "GLWTPL",
            "GPL-1.0-only",
            "GPL-1.0-or-later",
            "GPL-2.0-only",
            "GPL-2.0-or-later",
            "GPL-3.0-only",
            "GPL-3.0-or-later",
            "Giftware",
            "Glide",
            "Glulxe",
            "HPND",
            "HPND-sell-variant",
            "HTMLTIDY",
            "HaskellReport",
            "Hippocratic-2.1",
            "IBM-pibs",
            "ICU",
            "IJG",
            "IPA",
            "IPL-1.0",
            "ISC",
            "ImageMagick",
            "Imlib2",
            "Info-ZIP",
            "Intel",
            "Intel-ACPI",
            "Interbase-1.0",
            "JPNIC",
            "JSON",
            "JasPer-2.0",
            "LAL-1.2",
            "LAL-1.3",
            "LGPL-2.0-only",
            "LGPL-2.0-or-later",
            "LGPL-2.1-only",
            "LGPL-2.1-or-later",
            "LGPL-3.0-only",
            "LGPL-3.0-or-later",
            "LGPLLR",
            "LPL-1.0",
            "LPL-1.02",
            "LPPL-1.0",
            "LPPL-1.1",
            "LPPL-1.2",
            "LPPL-1.3a",
            "LPPL-1.3c",
            "Latex2e",
            "Leptonica",
            "LiLiQ-P-1.1",
            "LiLiQ-R-1.1",
            "LiLiQ-Rplus-1.1",
            "Libpng",
            "Linux-OpenIB",
            "MIT",
            "MIT-0",
            "MIT-CMU",
            "MIT-Modern-Variant",
            "MIT-advertising",
            "MIT-enna",
            "MIT-feh",
            "MIT-open-group",
            "MITNFA",
            "MPL-1.0",
            "MPL-1.1",
            "MPL-2.0",
            "MPL-2.0-no-copyleft-exception",
            "MS-PL",
            "MS-RL",
            "MTLL",
            "MakeIndex",
            "MirOS",
            "Motosoto",
            "MulanPSL-1.0",
            "MulanPSL-2.0",
            "Multics",
            "Mup",
            "NAIST-2003",
            "NASA-1.3",
            "NBPL-1.0",
            "NCGL-UK-2.0",
            "NCSA",
            "NGPL",
            "NIST-PD",
            "NIST-PD-fallback",
            "NLOD-1.0",
            "NLPL",
            "NOSL",
            "NPL-1.0",
            "NPL-1.1",
            "NPOSL-3.0",
            "NRL",
            "NTP",
            "NTP-0",
            "Naumen",
            "Net-SNMP",
            "NetCDF",
            "Newsletr",
            "Nokia",
            "Noweb",
            "O-UDA-1.0",
            "OCCT-PL",
            "OCLC-2.0",
            "ODC-By-1.0",
            "ODbL-1.0",
            "OFL-1.0",
            "OFL-1.0-RFN",
            "OFL-1.0-no-RFN",
            "OFL-1.1",
            "OFL-1.1-RFN",
            "OFL-1.1-no-RFN",
            "OGC-1.0",
            "OGDL-Taiwan-1.0",
            "OGL-Canada-2.0",
            "OGL-UK-1.0",
            "OGL-UK-2.0",
            "OGL-UK-3.0",
            "OGTSL",
            "OLDAP-1.1",
            "OLDAP-1.2",
            "OLDAP-1.3",
            "OLDAP-1.4",
            "OLDAP-2.0",
            "OLDAP-2.0.1",
            "OLDAP-2.1",
            "OLDAP-2.2",
            "OLDAP-2.2.1",
            "OLDAP-2.2.2",
            "OLDAP-2.3",
            "OLDAP-2.4",
            "OLDAP-2.5",
            "OLDAP-2.6",
            "OLDAP-2.7",
            "OLDAP-2.8",
            "OML",
            "OPL-1.0",
            "OSET-PL-2.1",
            "OSL-1.0",
            "OSL-1.1",
            "OSL-2.0",
            "OSL-2.1",
            "OSL-3.0",
            "OpenSSL",
            "PDDL-1.0",
            "PHP-3.0",
            "PHP-3.01",
            "PSF-2.0",
            "Parity-6.0.0",
            "Parity-7.0.0",
            "Plexus",
            "PolyForm-Noncommercial-1.0.0",
            "PolyForm-Small-Business-1.0.0",
            "PostgreSQL",
            "Python-2.0",
            "QPL-1.0",
            "Qhull",
            "RHeCos-1.1",
            "RPL-1.1",
            "RPL-1.5",
            "RPSL-1.0",
            "RSA-MD",
            "RSCPL",
            "Rdisc",
            "Ruby",
            "SAX-PD",
            "SCEA",
            "SGI-B-1.0",
            "SGI-B-1.1",
            "SGI-B-2.0",
            "SHL-0.5",
            "SHL-0.51",
            "SISSL",
            "SISSL-1.2",
            "SMLNJ",
            "SMPPL",
            "SNIA",
            "SPL-1.0",
            "SSH-OpenSSH",
            "SSH-short",
            "SSPL-1.0",
            "SWL",
            "Saxpath",
            "Sendmail",
            "Sendmail-8.23",
            "SimPL-2.0",
            "Sleepycat",
            "Spencer-86",
            "Spencer-94",
            "Spencer-99",
            "SugarCRM-1.1.3",
            "TAPR-OHL-1.0",
            "TCL",
            "TCP-wrappers",
            "TMate",
            "TORQUE-1.1",
            "TOSL",
            "TU-Berlin-1.0",
            "TU-Berlin-2.0",
            "UCL-1.0",
            "UPL-1.0",
            "Unicode-DFS-2015",
            "Unicode-DFS-2016",
            "Unicode-TOU",
            "Unlicense",
            "VOSTROM",
            "VSL-1.0",
            "Vim",
            "W3C",
            "W3C-19980720",
            "W3C-20150513",
            "WTFPL",
            "Watcom-1.0",
            "Wsuipa",
            "X11",
            "XFree86-1.1",
            "XSkat",
            "Xerox",
            "Xnet",
            "ZPL-1.1",
            "ZPL-2.0",
            "ZPL-2.1",
            "Zed",
            "Zend-2.0",
            "Zimbra-1.3",
            "Zimbra-1.4",
            "Zlib",
            "blessing",
            "bzip2-1.0.5",
            "bzip2-1.0.6",
            "copyleft-next-0.3.0",
            "copyleft-next-0.3.1",
            "curl",
            "diffmark",
            "dvipdfm",
            "eGenix",
            "etalab-2.0",
            "freeware",
            "gSOAP-1.3b",
            "gnuplot",
            "iMatix",
            "libpng-2.0",
            "libselinux-1.0",
            "libtiff",
            "mpich2",
            "proprietary",
            "psfrag",
            "psutils",
            "unknown",
            "xinetd",
            "xpp",
            "zlib-acknowledgement"
        }
        /** A structure describing some interesting facts about an OS template project */
        interface TemplateOsInfoProject {
            /** OS template project OS details */
            os ? : dedicated.TemplateOsInfoProjectItem;
            /** OS template project usage details */
            usage ? : dedicated.TemplateOsInfoProjectItem;
        }
        /** A structure describing some interesting facts about an OS template project item */
        interface TemplateOsInfoProjectItem {
            /** OS template project item governance */
            governance ? : string[];
            /** OS template project item release notes */
            releaseNotes ? : string;
            /** OS template project item url */
            url ? : string;
            /** OS template project item version */
            version ? : string;
        }
        /** A structure describing input questions for the specific OS template */
        interface TemplateOsInput {
            /** Default value */
            default ? : string;
            /** Input question description */
            description ? : string;
            /** When type is enum: name of the possible enum values */
            enum: string[];
            /** Whether answering to that question is mandatory in order to trigger an install with that specific OS or not */
            mandatory: boolean;
            /** Input question name */
            name: string;
            /** Input type */
            type: dedicated.TemplateOsInputTypeEnum;
        }
        /** Template OS Input type enum */
        enum TemplateOsInputTypeEnum {
            "boolean",
            "date",
            "email",
            "enum",
            "hexstring",
            "ip",
            "keyValue",
            "number",
            "string",
            "text",
            "time",
            "url",
            "uuid"
        }
        /** all language available */
        enum TemplateOsLanguageEnum {
            "ar",
            "bg",
            "cs",
            "da",
            "de",
            "el",
            "en",
            "es",
            "et",
            "fi",
            "fr",
            "he",
            "hr",
            "hu",
            "it",
            "ja",
            "ko",
            "lt",
            "lv",
            "nb",
            "nl",
            "no",
            "pl",
            "pt",
            "ro",
            "ru",
            "sk",
            "sl",
            "sr",
            "sv",
            "th",
            "tr",
            "tu",
            "uk",
            "zh-Hans-CN",
            "zh-Hans-HK"
        }
        /** A structure describing properties customizables about this dedicated installation template */
        interface TemplateOsProperties {
            /** Set up the server using the provided hostname instead of the default hostname */
            customHostname ? : string;
            /** Indicate the URL where your postinstall customisation script is located */
            postInstallationScriptLink ? : string;
            /** indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu */
            postInstallationScriptReturn ? : string;
            /** Name of the ssh key that should be installed. Password login will be disabled */
            sshKeyName ? : string;
            /** Use the distribution's native kernel instead of the recommended OVH Kernel */
            useDistributionKernel ? : boolean;
        }
        /** Os subfamily definition */
        enum TemplateOsSubfamilyEnum {
            "alma",
            "aos",
            "arch",
            "byoi",
            "centos",
            "cloudlinux",
            "coreos",
            "debian",
            "dgx",
            "esxi",
            "fedora",
            "freebsd",
            "gentoo",
            "hyperv",
            "omnios",
            "openio",
            "openmediavault",
            "opensuse",
            "ovh",
            "pcs",
            "power",
            "proxmox",
            "rhel",
            "rocky",
            "slackware",
            "sles-sap",
            "smartos",
            "solusvm",
            "ubuntu",
            "windows-server-core",
            "windows-server-desktop-exp",
            "xcp",
            "xen"
        }
        /** Os type */
        enum TemplateOsTypeEnum {
            "bsd",
            "custom",
            "ibm",
            "linux",
            "solaris",
            "unix",
            "windows"
        }
        /** Os usage definition */
        enum TemplateOsUsageEnum {
            "backup",
            "basic",
            "customer",
            "database",
            "erp",
            "hosting",
            "management",
            "other",
            "readyToUse",
            "virtualisation",
            "virtualization"
        }
        /** partition type */
        enum TemplatePartitionTypeEnum {
            "logical",
            "lv",
            "primary"
        }
    }
    namespace domain {
        /** Document file format */
        enum DocumentFormatsEnum {
            "gif",
            "jpeg",
            "jpg",
            "pdf",
            "png"
        }
        /** Operation actions */
        enum OperationActionEnum {
            "canCancel",
            "canCorrect",
            "canRelaunch",
            "canReset"
        }
        /** Operation functions */
        enum OperationFunctionEnum {
            "ContactControl",
            "DnsAnycastActivate",
            "DnsAnycastDeactivate",
            "DnssecDisable",
            "DnssecEnable",
            "DnssecResigning",
            "DnssecRollKsk",
            "DnssecRollZsk",
            "DomainAfterMarket",
            "DomainContactControl",
            "DomainContactUpdate",
            "DomainControl",
            "DomainCreate",
            "DomainDelete",
            "DomainDnsUpdate",
            "DomainDsUpdate",
            "DomainEmailRedirectionsCreate",
            "DomainEmailRedirectionsDelete",
            "DomainHold",
            "DomainHostCreate",
            "DomainHostDelete",
            "DomainHostUpdate",
            "DomainIncomingTransfer",
            "DomainLock",
            "DomainOutgoingTransfer",
            "DomainRegistryDelete",
            "DomainRenew",
            "DomainResourceDelete",
            "DomainRestore",
            "DomainTrade",
            "DomainUnhold",
            "DomainUnlock",
            "ZoneImport"
        }
        /** Operation status */
        enum OperationStatusEnum {
            "cancelled",
            "doing",
            "done",
            "error",
            "todo"
        }
        /** One step from an operation */
        interface OperationStep {
            /** Description of the step */
            description: string;
            /** Execution time of the step */
            executionDuration: number;
            /** Name of the step */
            step: string;
        }
        /** Tasks associated to domain */
        interface Task {
            /** Can accelerate the task */
            canAccelerate: boolean;
            /** Can cancel the task */
            canCancel: boolean;
            /** Can relaunch the task */
            canRelaunch: boolean;
            /** Comment about the task */
            comment ? : string;
            /** Creation date of the task */
            creationDate: string;
            /** Domain of the task */
            domain ? : string;
            /** Done date of the task */
            doneDate ? : string;
            /** Function of the task */
            function: string;
            /** Id of the task */
            id: number;
            /** Last update date of the task */
            lastUpdate: string;
            /** Status of the task */
            status: domain.OperationStatusEnum;
            /** Todo date of the task */
            todoDate: string;
        }
    }
    namespace http {
        /** All HTTP methods available */
        enum MethodEnum {
            "DELETE",
            "GET",
            "POST",
            "PUT"
        }
    }
    namespace insight {
        /** Insight access token */
        interface Access {
            /** Access token */
            access: string;
            /** Token creation date */
            createdAt: string;
            /** Token expiration date */
            expireAt: string;
        }
    }
    namespace ip {
        /** Possible values for IP campuses' names */
        enum CampusEnum {
            "BHS",
            "ERI",
            "GRA",
            "HIL",
            "LIM",
            "RBX",
            "SBG",
            "SGP",
            "SY2",
            "SYD",
            "VIN",
            "WAW",
            "YNM"
        }
    }
    namespace me {
        namespace SupportLevel {
            /** Support level of an account */
            interface Level {
                /** Level of support */
                level: me.SupportLevel.LevelTypeEnum;
            }
            /** Type of level */
            enum LevelTypeEnum {
                "business",
                "enterprise",
                "premium",
                "premium-accredited",
                "standard"
            }
        }
        namespace abuse {
            /** Get report API response */
            interface Abuse {
                /** Abuse category */
                category: me.abuse.AbuseCategoryEnum;
                /** Creation date of the abuse */
                creationDate: string;
                /** Public ID of the abuse case */
                publicId: string;
                /** Service where is hosted the abuse */
                service: string;
                /** Abuse case status */
                status: me.abuse.AbuseStatusEnum;
            }
            /** The abuse categories */
            enum AbuseCategoryEnum {
                "Compromised",
                "Copyright",
                "Illegal",
                "Intrusion",
                "Malware",
                "Network Attack",
                "Other",
                "Phishing",
                "Spam"
            }
            /** The abuse status */
            enum AbuseStatusEnum {
                "Answered",
                "Claimed",
                "Closed",
                "Escalated",
                "Open",
                "Paused",
                "Reopened",
                "Updated",
                "WaitingAnswer"
            }
        }
        namespace agreements {
            /** State of the agreement */
            enum AgreementStatusEnum {
                "ko",
                "obsolete",
                "ok",
                "todo"
            }
            /** Contract Agreement */
            interface ContractAgreement {
                /** State of the agreement */
                agreed: me.agreements.AgreementStatusEnum;
                /** Contract ID */
                contractId: number;
                /** Date of creation if the agreement is not signed. Date of signature if the agreement is signed */
                date: string;
                /** Contract Agreement ID */
                id: number;
            }
        }
        namespace billing {
            namespace group {
                namespace service {
                    /** Missing description */
                    interface Create {
                        /** A service ID to associate */
                        serviceId: number;
                    }
                } /** Missing description */
                interface BillingGroup {
                    /** Contact ID from /me/contact */
                    contactId ? : number;
                    /** Creation date */
                    creationDate: string;
                    /** Billing group ID */
                    groupId: number;
                    /** Last update date */
                    lastUpdate: string;
                    /** Billing group unique name */
                    name: string;
                    /** Payment method ID associated to the billing group */
                    paymentMethodId ? : number;
                }
                /** Missing description */
                interface Service {
                    /** Billing group ID */
                    groupId: number;
                    /** Service ID */
                    serviceId: number;
                }
            }
            namespace purchaseOrder {
                /** Purchase order creation payload */
                interface Creation {
                    /** Active */
                    active ? : boolean;
                    /** Billing Group identifier */
                    billingGroupId ? : number;
                    /** Description */
                    description ? : string;
                    /** End date */
                    endDate ? : string;
                    /** Reference */
                    reference: string;
                    /** Start date */
                    startDate: string;
                    /** Type of a purchase order */
                    type: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
                }
                /** Purchase Order */
                interface PurchaseOrder {
                    /** Active */
                    active ? : boolean;
                    /** Billing Group identifier */
                    billingGroupId ? : number;
                    /** Creation date */
                    creationDate: string;
                    /** Description */
                    description ? : string;
                    /** End date */
                    endDate ? : string;
                    /** Purchase Order identifier */
                    id: number;
                    /** Last update date */
                    lastUpdate: string;
                    /** Reference */
                    reference: string;
                    /** Start date */
                    startDate: string;
                    /** Status */
                    status: me.billing.purchaseOrder.StatusEnum;
                    /** Type of a purchase order */
                    type: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
                }
                /** Type of a purchase order */
                enum PurchaseOrderTypeEnum {
                    "PURCHASE_ORDER",
                    "REFERENCE_ORDER"
                }
                /** Status of the Purchase Order */
                enum StatusEnum {
                    "CREATED",
                    "DELETED"
                }
                /** Purchase order update payload */
                interface Update {
                    /** Active */
                    active ? : boolean;
                    /** Billing group identifier */
                    billingGroupId ? : number;
                    /** Description */
                    description ? : string;
                    /** End date */
                    endDate ? : string;
                    /** Reference */
                    reference ? : string;
                    /** Start date */
                    startDate ? : string;
                    /** Type of a purchase order */
                    type ? : me.billing.purchaseOrder.PurchaseOrderTypeEnum;
                }
            }
            namespace tasks {
                /** Asynchronous task related to Billing */
                interface Task {
                    /** Unique identifier of the Task */
                    id: number;
                    /** Metadata linked to the Task. Will help you determine which object it relates to */
                    metadata: me.billing.tasks.TaskMetadatum[];
                    /** Describes which Task is being performed */
                    name: me.billing.tasks.TaskNameEnum;
                    /** Current status of the Task */
                    status: me.billing.tasks.TaskStatusEnum;
                    /** Current step of the Task. The step depends on the Task name. */
                    step: string;
                }
                /** Metadatum linked to a Task */
                interface TaskMetadatum {
                    /** Metadatum key */
                    key: string;
                    /** Metadatum value */
                    value: string;
                }
                /** Billing tasks names */
                enum TaskNameEnum {
                    "contact/change"
                }
                /** Billing tasks statuses */
                enum TaskStatusEnum {
                    "CANCELLED",
                    "DOING",
                    "DONE",
                    "ERROR",
                    "INIT",
                    "PROBLEM",
                    "TODO"
                }
            }
        }
        namespace consent {
            /** Consent campaign */
            interface Campaign {
                /** Campaign description */
                description: string;
                /** Campaign name */
                name: string;
                /** Campaign type */
                type: me.consent.CampaignTypeEnum;
            }
            /** Campaign type */
            enum CampaignTypeEnum {
                "OPTIN",
                "OPTOUT"
            }
            /** Customer consent information for a campaign */
            interface Consent {
                /** Campaign name */
                campaign: string;
                /** Consent decisions history for this campaign */
                history: me.consent.Decision[];
                /** Campaign type */
                type: me.consent.CampaignTypeEnum;
                /** Current consent value */
                value: boolean;
            }
            /** Customer consent decision */
            interface Decision {
                /** Consent decision datetime */
                timestamp: string;
                /** Consent decision value */
                value: boolean;
            }
        }
        namespace consumption {
            namespace transaction {
                namespace Element {
                    /** Element of consumption for resource */
                    interface Detail {
                        /** Consumption amount price */
                        price: me.consumption.Price;
                        /** Consumption quantity */
                        quantity: number;
                        /** Unique ID associated to one service element */
                        unique_id ? : string;
                    }
                } /** Element of consumption for resource */
                interface Element {
                    /** List of consumption details for this planCode */
                    details: me.consumption.transaction.element.Detail[];
                    /** Identifier of the offer */
                    planCode: string;
                    /** Family of the offer */
                    planFamily: string;
                    /** Consumption amount price */
                    price: me.consumption.Price;
                    /** Consumption quantity */
                    quantity: number;
                }
            } /** Price with currency and amount in micro-cents */
            interface Price {
                /** currencyCode */
                currencyCode: order.CurrencyCodeEnum;
                /** text */
                text: string;
                /** value */
                value: double;
                /** valueInUcents */
                valueInUcents: number;
            }
            /** List of consumptions recorded in a range */
            interface Transaction {
                /** Begin date */
                beginDate: string;
                /** Creation date */
                creationDate ? : string;
                /** List of product plan code consumption */
                elements: me.consumption.transaction.Element[];
                /** End date */
                endDate ? : string;
                /** Transaction ID */
                id ? : number;
                /** Last update */
                lastUpdate ? : string;
                /** Consumption amount price */
                price: me.consumption.Price;
                /** Service ID */
                serviceId: number;
            }
        }
        namespace contact {
            /** Representation of a Contact */
            interface Address {
                /** City */
                city: string;
                /** Country */
                country: nichandle.CountryEnum;
                /** First line of the address */
                line1: string;
                /** Second line of the address */
                line2 ? : string;
                /** Third line of the address */
                line3 ? : string;
                /** Other details */
                otherDetails ? : string;
                /** Province name */
                province ? : string;
                /** Zipcode */
                zip ? : string;
            }
            /** Contact definition */
            interface Contact {
                /** Address for this contact */
                address: me.contact.Address;
                /** Birth city */
                birthCity ? : string;
                /** Birth Country */
                birthCountry ? : nichandle.CountryEnum;
                /** Birth date */
                birthDay ? : string;
                /** Birth Zipcode */
                birthZip ? : string;
                /** Cellphone number */
                cellPhone ? : phoneNumber;
                /** National identification number of your company */
                companyNationalIdentificationNumber ? : string;
                /** Email address */
                email: string;
                /** Fax number */
                fax ? : phoneNumber;
                /** First name */
                firstName: string;
                /** Gender */
                gender ? : nichandle.GenderEnum;
                /** Contact Identifier */
                id: number;
                /** Language */
                language: nichandle.LanguageEnum;
                /** Last name */
                lastName: string;
                /** Legal form of the contact */
                legalForm: nichandle.LegalFormEnum;
                /** National identification number of the contact */
                nationalIdentificationNumber ? : string;
                /** Nationality */
                nationality ? : nichandle.CountryEnum;
                /** Organisation name */
                organisationName ? : string;
                /** Organisation type */
                organisationType ? : string;
                /** Telephone number */
                phone ? : phoneNumber;
                /** Spare email address */
                spareEmail ? : string;
                /** VAT number */
                vat ? : string;
            }
        }
        namespace credit {
            namespace balance {
                namespace movement {
                    /** Missing description */
                    interface SubObject {
                        /** Sub object ID */
                        id: string;
                        /** Sub object name */
                        name: string;
                    }
                    /** Balance movement type */
                    enum TypeEnum {
                        "BONUS",
                        "CANCEL",
                        "CREDIT_NOTE",
                        "EXPIRE",
                        "GIFT",
                        "MANUAL",
                        "ORDER",
                        "REFUND",
                        "UNPAID",
                        "USE",
                        "VOUCHER"
                    }
                } /** Missing description */
                interface BalanceDetails {
                    /** Balance part amount */
                    amount: order.Price;
                    /** Balance sub name */
                    balanceSubName ? : string;
                    /** Expiring parts of this balance */
                    expiring: me.credit.balance.ExpiringMovement[];
                    /** Service ID of this balance part */
                    serviceId ? : number;
                }
                /** Missing description */
                interface BookedMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Balance sub name */
                    balanceSubName ? : string;
                    /** Order ID */
                    orderId: number;
                }
                /** Missing description */
                interface ExpiringMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Movement creation date */
                    creationDate: string;
                    /** Movement expiration date */
                    expirationDate: string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Object source of this credit movement */
                    sourceObject: me.credit.balance.movement.SubObject;
                }
                /** Missing description */
                interface Movement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Balance name */
                    balanceName: string;
                    /** Movement creation date */
                    creationDate: string;
                    /** Object destination of this credit movement */
                    destinationObject ? : me.credit.balance.movement.SubObject;
                    /** Movement expiration date */
                    expirationDate ? : string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Movement ID */
                    movementId: number;
                    /** Order ID associated to this credit movement */
                    orderId ? : number;
                    /** Object source of this credit movement */
                    sourceObject: me.credit.balance.movement.SubObject;
                    /** Movement type */
                    type: me.credit.balance.movement.TypeEnum;
                }
                /** Balance type */
                enum TypeEnum {
                    "BONUS",
                    "DEPOSIT",
                    "PREPAID_ACCOUNT",
                    "VOUCHER"
                }
            }
            namespace code {
                /** Missing description */
                interface Redeem {
                    /** Code to validate */
                    inputCode: string;
                    /** Restrict credit to a specific service */
                    serviceId: number;
                }
            } /** Missing description */
            interface Balance {
                /** Balance amount */
                amount: order.Price;
                /** Balance details, amounts by serviceID */
                balanceDetails: me.credit.balance.BalanceDetails[];
                /** Balance name */
                balanceName: string;
                /** Movement already booked on orders */
                booked: me.credit.balance.BookedMovement[];
                /** Balance creation date */
                creationDate: string;
                /** Movement expiring soon */
                expiring: me.credit.balance.ExpiringMovement[];
                /** Balance last update */
                lastUpdate: string;
                /** Balance type */
                type: me.credit.balance.TypeEnum;
            }
        }
        namespace geolocation {
            /** Representation of country and continent from visitor IP */
            interface ContinentCountryLocation {
                /** Continent */
                continent ? : me.geolocation.ContinentEnum;
                /** Country iso code */
                countryCode ? : me.geolocation.CountryEnum;
                /** The IP address processed, the user's origin one */
                ip: string;
            }
            /** Continent */
            enum ContinentEnum {
                "africa",
                "antartica",
                "asia",
                "europe",
                "north-america",
                "oceania",
                "south-america"
            }
            /** Country iso code */
            enum CountryEnum {
                "ac",
                "ad",
                "ae",
                "af",
                "ag",
                "ai",
                "al",
                "am",
                "an",
                "ao",
                "aq",
                "ar",
                "as",
                "at",
                "au",
                "aw",
                "ax",
                "az",
                "ba",
                "bb",
                "bd",
                "be",
                "bf",
                "bg",
                "bh",
                "bi",
                "bj",
                "bl",
                "bm",
                "bn",
                "bo",
                "bq",
                "br",
                "bs",
                "bt",
                "bv",
                "bw",
                "by",
                "bz",
                "ca",
                "cc",
                "cd",
                "cf",
                "cg",
                "ch",
                "ci",
                "ck",
                "cl",
                "cm",
                "cn",
                "co",
                "cr",
                "cs",
                "cu",
                "cv",
                "cw",
                "cx",
                "cy",
                "cz",
                "de",
                "dj",
                "dk",
                "dm",
                "do",
                "dz",
                "ec",
                "ee",
                "eg",
                "eh",
                "er",
                "es",
                "et",
                "fc",
                "fd",
                "fi",
                "fj",
                "fk",
                "fm",
                "fo",
                "fr",
                "fx",
                "ga",
                "gb",
                "gd",
                "ge",
                "gf",
                "gg",
                "gh",
                "gi",
                "gl",
                "gm",
                "gn",
                "gp",
                "gq",
                "gr",
                "gs",
                "gt",
                "gu",
                "gw",
                "gy",
                "hk",
                "hm",
                "hn",
                "hr",
                "ht",
                "hu",
                "id",
                "ie",
                "il",
                "im",
                "in",
                "io",
                "iq",
                "ir",
                "is",
                "it",
                "je",
                "jm",
                "jo",
                "jp",
                "ke",
                "kg",
                "kh",
                "ki",
                "km",
                "kn",
                "kp",
                "kr",
                "kw",
                "ky",
                "kz",
                "la",
                "lb",
                "lc",
                "li",
                "lk",
                "lr",
                "ls",
                "lt",
                "lu",
                "lv",
                "ly",
                "ma",
                "mc",
                "md",
                "me",
                "mf",
                "mg",
                "mh",
                "mk",
                "ml",
                "mm",
                "mn",
                "mo",
                "mp",
                "mq",
                "mr",
                "ms",
                "mt",
                "mu",
                "mv",
                "mw",
                "mx",
                "my",
                "mz",
                "na",
                "nc",
                "ne",
                "nf",
                "ng",
                "ni",
                "nl",
                "no",
                "np",
                "nr",
                "nu",
                "nz",
                "om",
                "pa",
                "pe",
                "pf",
                "pg",
                "ph",
                "pk",
                "pl",
                "pm",
                "pn",
                "pr",
                "ps",
                "pt",
                "pw",
                "py",
                "qa",
                "qc",
                "re",
                "ro",
                "rs",
                "ru",
                "rw",
                "sa",
                "sb",
                "sc",
                "sd",
                "se",
                "sg",
                "sh",
                "si",
                "sj",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sr",
                "ss",
                "st",
                "sv",
                "sx",
                "sy",
                "sz",
                "tc",
                "td",
                "tf",
                "tg",
                "th",
                "tj",
                "tk",
                "tl",
                "tm",
                "tn",
                "to",
                "tp",
                "tr",
                "tt",
                "tv",
                "tw",
                "tz",
                "ua",
                "ug",
                "uk",
                "um",
                "us",
                "uy",
                "uz",
                "va",
                "vc",
                "ve",
                "vg",
                "vi",
                "vn",
                "vu",
                "we",
                "wf",
                "ws",
                "ye",
                "yt",
                "yu",
                "za",
                "zm",
                "zw"
            }
        }
        namespace incident {
            /** Original service that can be migrated */
            interface MigrateServices {
                /** If false, the order will be registered; if true, the order will be returned but not registered. Useful to compute prices */
                dryRun: boolean;
                /** IDs of the services to migrate */
                serviceIds: number[];
            }
            /** Order created in order to migrate a service */
            interface Order {
                /** Order created in order to migrate a service */
                order: order.Order;
            }
            /** Commercial gesture applied for the service migration */
            interface PercentagePromotion {
                /** Duration applied for the commercial gesture */
                duration: duration;
                /** Percentage of the discount */
                value: number;
            }
            /** Commercial offer a customer can migrate his service to */
            interface ProposedOffer {
                /** List of configurations used for the migration */
                configurations: me.incident.ProposedOfferConfiguration[];
                /** Proposed commercial offer */
                plan: order.cart.GenericProductDefinition;
                /** Pricing mode used to bill the offer */
                pricingMode: string;
                /** Promotion applied to the commercial offer */
                promotion: me.incident.PercentagePromotion;
            }
            /** Config */
            interface ProposedOfferConfiguration {
                /** name */
                name: string;
                /** value */
                value: string;
            }
            /** Service you may migrate to a given offer */
            interface ServiceMigration {
                /** Options to migrate linked to the original service */
                addons: me.incident.ServiceMigration[];
                /** ID of an ongoing migration order */
                orderId ? : number;
                /** Proposed commercial offer to replace the service */
                proposedOffer: me.incident.ProposedOffer;
                /** Description of the service to migrate */
                serviceToMigrate ? : me.incident.ServiceToMigrate;
            }
            /** Original service that can be migrated */
            interface ServiceToMigrate {
                /** Description of the offer of the service */
                description: string;
                /** Additional information on the service */
                metadata: complexType.SafeKeyValue < string > [];
                /** Route */
                route ? : string;
                /** ID of the migratable service */
                serviceId: number;
                /** Name of the migratable service */
                serviceName: string;
            }
        }
        namespace migration {
            namespace step {
                /** Country Migration step contracts data */
                interface Contracts {
                    /** Array of contract agreements to accept */
                    agreements: me.agreements.ContractAgreement[];
                }
                /** Country Migration step debt data */
                interface Debt {
                    /** Balance amount */
                    balanceAmount ? : order.Price;
                    /** OVH Account amount */
                    ovhAccountAmount ? : order.Price;
                }
                /** Name of the migration step */
                enum NameEnum {
                    "CONTRACTS",
                    "DEBT",
                    "NIC",
                    "ORDERS"
                }
                /** Country Migration step orders data */
                interface Orders {
                    /** Whether there is pending operations */
                    pendingOperations: boolean;
                    /** Whether there is pending promotions */
                    pendingPromotions: boolean;
                    /** Whether there is pending subscriptions */
                    pendingSubscriptions: boolean;
                }
                /** Status of the migration step */
                enum StatusEnum {
                    "OK",
                    "PENDING"
                }
            } /** contract */
            interface Contract {
                /** Status */
                active: boolean;
                /** Date */
                date: string;
                /** ID */
                id: number;
                /** Name */
                name: string;
                /** PDF URL */
                pdf: string;
                /** Text of the contract */
                text: string;
            }
            /** Status of the migration */
            enum StatusEnum {
                "CANCELED",
                "CHECKED",
                "DOING",
                "MIGRATED",
                "TODO",
                "TO_CHECK"
            }
            /** Country Migration Step */
            interface Step {
                /** Contracts data */
                contracts ? : me.migration.step.Contracts;
                /** Debt data */
                debt ? : me.migration.step.Debt;
                /** Migration step name */
                name: me.migration.step.NameEnum;
                /** Orders data */
                orders ? : me.migration.step.Orders;
                /** Billing step status */
                status: me.migration.step.StatusEnum;
            }
        }
        namespace partnerLevel {
            /** Partner level of an account */
            interface Level {
                /** Level of partner */
                level: me.partnerLevel.LevelTypeEnum;
                /** Level of Support required */
                requirement: me.partnerLevel.RequirementLoSEnum;
            }
            /** Type of level */
            enum LevelTypeEnum {
                "advanced",
                "none",
                "standard"
            }
            /** Level of Support required */
            enum RequirementLoSEnum {
                "none",
                "premium",
                "premium-accredited"
            }
        }
        namespace payment {
            namespace method {
                /** Callback URL's to register a new payment method */
                interface CallbackUrl {
                    /** URL when customer cancels the action */
                    cancel: string;
                    /** URL when registration encounters an error */
                    error: string;
                    /** URL when registration failed */
                    failure: string;
                    /** URL when payment method is in validation */
                    pending: string;
                    /** URL when payment method registration success */
                    success: string;
                }
                /** Payment method Challenge */
                interface Challenge {
                    /** Challenge */
                    challenge: string;
                }
                /** Payment method creation payload */
                interface Creation {
                    /** Associated billing contact ID */
                    billingContactId ? : number;
                    /** Callback URL's necessary to register */
                    callbackUrl: me.payment.method.CallbackUrl;
                    /** Indicates if this payment method will be set as the default one */
                    default: boolean;
                    /** Personalized description */
                    description ? : string;
                    /** Additional payment information */
                    formData ? : string;
                    /** Order ID to pay it if it's possible (in oneshot transaction or while registration) */
                    orderId ? : number;
                    /** Payment sub-type */
                    paymentSubType ? : me.payment.CreationSubTypeEnum;
                    /** Payment type */
                    paymentType: string;
                    /** Register this payment method if it's possible (default value is false and will proceed a oneshot transaction) */
                    register: boolean;
                }
                /** Add details to one payment method challenge */
                interface Details {
                    /** Details data */
                    details: string;
                    /** Transaction ID */
                    transactionId: number;
                }
                /** Payload to finalize payment method registration */
                interface Finalize {
                    /** Expiration month */
                    expirationMonth ? : number;
                    /** Expiration year */
                    expirationYear ? : number;
                    /** Form session ID */
                    formSessionId ? : string;
                    /** Registration ID */
                    registrationId ? : string;
                }
                /** Payment method status */
                enum StatusEnum {
                    "CANCELED",
                    "CANCELING",
                    "CREATED",
                    "CREATING",
                    "ERROR",
                    "EXPIRED",
                    "FAILED",
                    "MAINTENANCE",
                    "PAUSED",
                    "REJECTED",
                    "REPLACED",
                    "VALID",
                    "VALIDATING"
                }
                /** Registration response to validate */
                interface Validation {
                    /** Form session ID */
                    formSessionId ? : string;
                    /** Merchant ID */
                    merchantId ? : string;
                    /** Organization ID */
                    organizationId ? : string;
                    /** Registered new payment method ID */
                    paymentMethodId: number;
                    /** Registered new transaction ID */
                    transactionId ? : number;
                    /** Registration validation URL to redirect */
                    url ? : string;
                    /** Registration validation type */
                    validationType: me.payment.IntegrationEnum;
                }
            }
            namespace transaction {
                /** Transaction status */
                enum StatusEnum {
                    "CANCELED",
                    "CANCELING",
                    "CONFIRMING",
                    "ERROR",
                    "EXPIRED",
                    "FAILED",
                    "READY",
                    "SUCCESS"
                }
                /** Transaction type */
                enum TypeEnum {
                    "CREDIT",
                    "DEBIT"
                }
            } /** Available payment method object */
            interface AvailablePaymentMethod {
                /** Form session ID */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: me.payment.Icon;
                /** Payment method integration type */
                integration: me.payment.IntegrationEnum;
                /** Merchant ID */
                merchantId ? : string;
                /** Indicates if payment method type allows to process oneshot payment */
                oneshot: boolean;
                /** Organization ID */
                organizationId ? : string;
                /** Payment method sub-type */
                paymentSubType ? : me.payment.AvailableSubTypeEnum;
                /** Payment method type */
                paymentType: string;
                /** Indicates if payment method type is registerable ? */
                registerable: boolean;
                /** Indicates if payment method type allows payment and registration at the same time */
                registerableWithTransaction: boolean;
            }
            /** Payment method available sub-type enum */
            enum AvailableSubTypeEnum {
                "30_DAYS",
                "45_DAYS",
                "60_DAYS",
                "AMERICAN_EXPRESS",
                "AURA",
                "CARTE_BANCAIRE",
                "CARTE_BLEUE",
                "CHORUS",
                "DINERS_CLUB",
                "DISCOVER",
                "JCB",
                "MAESTRO",
                "MASTERCARD",
                "NONE",
                "VISA"
            }
            /** Payment method creation sub-type enum */
            enum CreationSubTypeEnum {
                "CHORUS",
                "NONE"
            }
            /** Icon */
            interface Icon {
                /** Icon in base64 */
                data ? : string;
                /** Icon name */
                name: string;
                /** Icon URL */
                url ? : string;
            }
            /** Register integration type enum */
            enum IntegrationEnum {
                "COMPONENT",
                "IFRAME_VANTIV",
                "IN_CONTEXT",
                "NONE",
                "POST_FORM",
                "REDIRECT"
            }
            /** Payment method object */
            interface PaymentMethod {
                /** Associated billing contact ID */
                billingContactId ? : number;
                /** Creation date */
                creationDate: string;
                /** Indicates if payment method is the default one for this account */
                default: boolean;
                /** Custom customer description */
                description ? : string;
                /** Expiration date */
                expirationDate ? : string;
                /** Form session ID */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: me.payment.Icon;
                /** Payment method integration type */
                integration ? : me.payment.IntegrationEnum;
                /** Payment method public label */
                label ? : string;
                /** Last update date */
                lastUpdate: string;
                /** Merchant ID */
                merchantId ? : string;
                /** Indicates if payment method support the oneclick functionality */
                oneclick ? : boolean;
                /** Payment mean ID associated to this payment method */
                paymentMeanId ? : number;
                /** Payment method ID */
                paymentMethodId: number;
                /** Payment method sub-type */
                paymentSubType ? : me.payment.AvailableSubTypeEnum;
                /** Payment method type */
                paymentType: string;
                /** Payment method status */
                status: me.payment.method.StatusEnum;
            }
            /** Transaction object */
            interface Transaction {
                /** Transaction amount */
                amount: order.Price;
                /** Creation date */
                creationDate: string;
                /** Last update date */
                lastUpdate: string;
                /** Associated payment method ID */
                paymentMethodId: number;
                /** Transaction status */
                status: me.payment.transaction.StatusEnum;
                /** Transaction ID */
                transactionId: number;
                /** Transaction type */
                type: me.payment.transaction.TypeEnum;
            }
        }
        namespace paymentMean {
            /** Credit card informations */
            interface BankAccount {
                /** bic */
                bic: string;
                /** creationDate */
                creationDate: string;
                /** This credit card is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this bank account */
                description ? : string;
                /** iban */
                iban: string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** mandateSignatureDate */
                mandateSignatureDate ? : string;
                /** Bank account owner's address */
                ownerAddress: string;
                /** Bank account owner's name */
                ownerName: string;
                /** Bank account state */
                state: me.paymentMean.BankAccountStateEnum;
                /** uniqueReference */
                uniqueReference: string;
                /** validationDocumentLink */
                validationDocumentLink ? : string;
            }
            /** Missing description */
            interface BankAccountChallengeCreation {
                /** Payload to answer the challenge */
                challenge: string;
            }
            /** Missing description */
            interface BankAccountCreation {
                /** Bank account BIC */
                bic: string;
                /** Custom description of this account */
                description ? : string;
                /** Bank account IBAN */
                iban: string;
                /** Bank account owner's address */
                ownerAddress: string;
                /** Bank account owner's name */
                ownerName: string;
                /** Set as default payment mean once validated */
                setDefault ? : boolean;
            }
            /** State of your bank account */
            enum BankAccountStateEnum {
                "blockedForIncidents",
                "pendingValidation",
                "replaced",
                "valid"
            }
            /** A validation required to add a payment mean bank account */
            interface BankAccountValidation {
                /** id */
                id: number;
                /** submitUrl */
                submitUrl ? : string;
                /** URL where redirect for registration process */
                url: string;
                /** Kind of registration validation */
                validationType: me.paymentMean.ValidationTypeEnum;
            }
            /** Credit card informations */
            interface CreditCard {
                /** This credit card is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this credit card */
                description ? : string;
                /** expirationDate */
                expirationDate: string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** Credit card BIN */
                number: string;
                /** Credit card state */
                state: me.paymentMean.CreditCardStateEnum;
                /** True if this credit card has been registered with a successful 3DSecure challenge */
                threeDsValidated: boolean;
                /** Kind of credit card */
                type: string;
            }
            /** Missing description */
            interface CreditCardChallengeCreation {
                /** Payload to answer the challenge */
                challenge: string;
            }
            /** Missing description */
            interface CreditCardCreation {
                /** Custom description of this account */
                description ? : string;
                /** Callback URL where the customer will be redirected to after validation */
                returnUrl ? : string;
                /** Set as default payment mean once validated */
                setDefault ? : boolean;
            }
            /** State of your credit card */
            enum CreditCardStateEnum {
                "expired",
                "tooManyFailures",
                "valid"
            }
            /** A validation required to add a payment mean credit card */
            interface CreditCardValidation {
                /** id */
                id: number;
                /** submitUrl */
                submitUrl ? : string;
                /** URL where redirect for registration process */
                url: string;
                /** Kind of registration validation */
                validationType: me.paymentMean.ValidationTypeEnum;
            }
            /** Deferred account informations */
            interface Deferred {
                /** Creation date of this deferred account */
                creationDate: string;
                /** This deferred account is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this deferred account */
                description ? : string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** Deferred account type */
                label ? : string;
                /** Deferred account state */
                state: me.paymentMean.DeferredStateEnum;
            }
            /** State of you deferred account */
            enum DeferredStateEnum {
                "failed",
                "valid"
            }
            /** Payment mean type icon */
            interface IconData {
                /** Icon in base64 */
                data ? : string;
                /** Icon name */
                name ? : string;
                /** Icon URL */
                url ? : string;
            }
            /** Paypal informations */
            interface Paypal {
                /** Paypal agreement */
                agreementId: string;
                /** Paypal creation date */
                creationDate: string;
                /** This paypal is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this paypal */
                description ? : string;
                /** Paypal associated email */
                email: string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** Paypal state */
                state: me.paymentMean.PaypalStateEnum;
            }
            /** Missing description */
            interface PaypalChallengeCreation {
                /** Payload to answer the challenge */
                challenge: string;
            }
            /** Missing description */
            interface PaypalCreation {
                /** Custom description of this account */
                description ? : string;
                /** Callback URL where the customer will be redirected to after validation */
                returnUrl ? : string;
                /** Set as default payment mean once validated */
                setDefault ? : boolean;
            }
            /** State of you paypal */
            enum PaypalStateEnum {
                "failing",
                "tooManyFailures",
                "valid"
            }
            /** A validation required to add a payment mean paypal */
            interface PaypalValidation {
                /** id */
                id: number;
                /** submitUrl */
                submitUrl ? : string;
                /** URL where redirect for registration process */
                url: string;
                /** Kind of registration validation */
                validationType: me.paymentMean.ValidationTypeEnum;
            }
            /** All the validation you may have to do */
            enum ValidationTypeEnum {
                "creditAccount",
                "documentToSend",
                "simpleValidation"
            }
        }
        namespace repricing {
            /** Description of a service being repricing */
            interface Service {
                /** Addons of the Service */
                addons: me.repricing.Service[];
                /** Date of application of the repricing */
                applicationDate: string;
                /** Description of the Service */
                description: string;
                /** Custom name for the Service */
                displayName: string;
                /** Duration for the price described in the payload (ISO8601) */
                duration: string;
                /** Price after repricing, tax included */
                priceAfterWithTax: order.Price;
                /** Price after repricing, tax excluded */
                priceAfterWithoutTax: order.Price;
                /** Price before repricing, tax included */
                priceBeforeWithTax: order.Price;
                /** Price before repricing, tax excluded */
                priceBeforeWithoutTax: order.Price;
                /** Route */
                route ? : services.expanded.Route;
                /** Service ID */
                serviceId: number;
                /** Identifier of the service */
                serviceName: string;
                /** Total price (addons included) after repricing, tax included */
                totalPriceAfterWithTax: order.Price;
                /** Total price (addons included) after repricing, tax excluded */
                totalPriceAfterWithoutTax: order.Price;
                /** Total price (addons included) before repricing, tax included */
                totalPriceBeforeWithTax: order.Price;
                /** Total price (addons included) before repricing, tax excluded */
                totalPriceBeforeWithoutTax: order.Price;
            }
        }
        namespace tag {
            namespace tagKey {
                /** Tag key type */
                enum TypeEnum {
                    "ARRAY",
                    "DATE",
                    "ENUM",
                    "INTEGER",
                    "TEXT",
                    "VARCHAR"
                }
            } /** Available tag configuration object for creation */
            interface AvailableTag {
                /** Tag configuration keys */
                keys: me.tag.TagKey[];
                /** Tag name */
                name: string;
            }
            /** Tag creation payload */
            interface Creation {
                /** Reason */
                reason ? : string;
                /** Tag name */
                tagName: string;
            }
            /** Tag status */
            enum StatusEnum {
                "CREATED",
                "CREATING",
                "DELETED",
                "DELETING",
                "ERROR",
                "MODERATING",
                "REFUSED",
                "REFUSING",
                "REVOCATING",
                "WAIT_MODERATION",
                "WAIT_REVOCATION"
            }
            /** Tag */
            interface Tag {
                /** Creation date */
                creationDate: string;
                /** Customer code */
                customerCode: string;
                /** Expiration date */
                expirationDate ? : string;
                /** Extra data */
                extra ? : me.tag.TagExtra;
                /** Last update */
                lastUpdate: string;
                /** Tag Status */
                status: me.tag.StatusEnum;
                /** Tag name */
                tag: string;
            }
            /** Tag Extra */
            interface TagExtra {
                /** Tax exemption */
                exemption ? : string;
            }
            /** Tag configuration key */
            interface TagKey {
                /** Enum values */
                enum ? : string[];
                /** Tag key name */
                key: string;
                /** Maximum length for a text */
                maxLength ? : number;
                /** Minimum value for a number */
                minValue ? : number;
                /** Tag key optional */
                optional: boolean;
                /** Tag value regex pattern */
                pattern ? : string;
                /** Tag key type */
                type: me.tag.tagKey.TypeEnum;
            }
        } /** Country Migration */
        interface Migration {
            /** Billing country to migrate from */
            from: nichandle.OvhSubsidiaryEnum;
            /** Migration Id */
            id: number;
            /** Migration status */
            status: me.migration.StatusEnum;
            /** Migration steps */
            steps ? : me.migration.Step[];
            /** Billing country to migrate to */
            to: nichandle.OvhSubsidiaryEnum;
        }
    }
    namespace oauth2 {
        /** An oAuth2 Client */
        interface client {
            /** allowed callback urls */
            callbackUrls: string[];
            /** client's client_id */
            clientId: string;
            /** client's creation date */
            createdAt: string;
            /** client's description */
            description: string;
            /** client's name */
            name: string;
        }
        /** An oAuth2 Client Request */
        interface clientRequest {
            /** allowed callback urls */
            callbackUrls: string[];
            /** client's description */
            description: string;
            /** client's name */
            name: string;
        }
        /** An oAuth2 Client Secret */
        interface clientSecret {
            /** client's client_id */
            clientId: string;
            /** client's client_secret */
            clientSecret: string;
        }
    }
    namespace payment {
        namespace method {
            /** Available payment methods */
            interface AvailablePaymentMethod {
                /** Payment method session identifier */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: payment.method.Icon;
                /** Graphical payment integration to use */
                integration: payment.method.IntegrationType;
                /** Payment method merchant identifier */
                merchantId ? : string;
                /** Payment method type is possible to pay in oneshot mode ? */
                oneshot: boolean;
                /** Payment method organization identifier */
                organizationId ? : string;
                /** Payment method subtype */
                paymentSubType ? : string;
                /** Payment method type */
                paymentType: string;
                /** Payment method type is registerable ? */
                registerable: boolean;
                /** Payment method type is registerable with the possibility to pay in same time an order ? */
                registerableWithTransaction: boolean;
            }
            /** Payment icon */
            interface Icon {
                /** Icon data in base64 */
                data ? : string;
                /** Icon name */
                name ? : string;
                /** Icon URL */
                url ? : string;
            }
            /** Payment method integration type */
            enum IntegrationType {
                "COMPONENT",
                "DONE",
                "IFRAME_VANTIV",
                "IN_CONTEXT",
                "NONE",
                "POST_FORM",
                "REDIRECT"
            }
            /** payment method */
            interface PaymentMethod {
                /** Associated billing contact ID */
                billingContactId ? : number;
                /** Creation date */
                creationDate: string;
                /** Indicates if payment method is the default one for this account */
                default: boolean;
                /** Custom customer description */
                description ? : string;
                /** Expiration date */
                expirationDate ? : string;
                /** Form session ID */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: payment.method.Icon;
                /** Payment method integration type */
                integration ? : payment.method.IntegrationType;
                /** Payment method public label */
                label ? : string;
                /** Last update date */
                lastUpdate ? : string;
                /** Merchant ID */
                merchantId ? : string;
                /** Indicates if payment method support the oneclick functionality */
                oneclick ? : boolean;
                /** Payment mean ID associated to this payment method */
                paymentMeanId ? : number;
                /** Payment method ID */
                paymentMethodId: number;
                /** Payment method sub type */
                paymentSubType ? : payment.method.SubTypeEnum;
                /** Payment method type */
                paymentType: string;
                /** Payment method status */
                status: payment.method.StatusEnum;
            }
            /** Payment method status */
            enum StatusEnum {
                "CANCELED",
                "CANCELING",
                "CREATED",
                "CREATING",
                "ERROR",
                "EXPIRED",
                "FAILED",
                "MAINTENANCE",
                "PAUSED",
                "REJECTED",
                "REPLACED",
                "VALID",
                "VALIDATING"
            }
            /** Payment method sub-type */
            enum SubTypeEnum {
                "30_DAYS",
                "45_DAYS",
                "60_DAYS",
                "AMERICAN_EXPRESS",
                "AURA",
                "CARTE_BANCAIRE",
                "CARTE_BLEUE",
                "CHORUS",
                "DINERS_CLUB",
                "DISCOVER",
                "JCB",
                "MAESTRO",
                "MASTERCARD",
                "NONE",
                "VISA"
            }
        }
    }
    namespace recommendations {
        /** Recommendation struct */
        interface Recommendation {
            /** advices */
            advices: recommendations.RecommendationAdvice[];
            /** Recommendation advices introduction and description sentences, indexed by supported locales */
            localizedDescription: Record < string,
            string > ;
            /** Recommendation rank */
            rank: number;
        }
        /** Recommendation advice struct */
        interface RecommendationAdvice {
            /** Product identifier, usually range>line>category>subCategory>marketingName */
            id: string;
            /** Recommendation score */
            score: double;
            /** Product page url */
            url: string;
        }
        /** Array of Recommendation objects */
        interface Recommendations {
            /** recommendations */
            recommendations: recommendations.Recommendation[];
        }
        /** Recommendations product ranges */
        enum productRangesEnum {
            "baremetal",
            "domain",
            "public_cloud",
            "saas",
            "vps",
            "web"
        }
    }
    namespace telephony {
        /** Billing policies settings */
        interface BillingSettings {
            /** Renew is done by billing contact instead of billing account */
            renewByBillingContact: boolean;
        }
        /** Default IP restriction of a VoIP line */
        interface DefaultIpRestriction {
            /** id */
            id: number;
            /** The IPv4 subnet you want to allow */
            subnet: ipv4Block;
            /** The protocol you want to restrict (sip/mgcp) */
            type: telephony.ProtocolEnum;
        }
        /** Line description policies settings */
        interface LineDescriptionSettings {
            /** Line's description is displayed on bills */
            displayOnBill: boolean;
            /** Line's description is displayed on incoming calls */
            displayOnIncomingCall: boolean;
        }
        /** Custom domains of your fax services */
        interface MailDomain2Service {
            /** The custom domain of your fax services */
            domain: string;
            /** id */
            id: number;
        }
        /** Phone protocol */
        enum ProtocolEnum {
            "mgcp",
            "sip"
        }
        /** Telephony settings linked to the customer account */
        interface Settings {
            /** Billing policies settings */
            billingPolicies: telephony.BillingSettings;
            /** Line description policies settings */
            lineDescriptionPolicies: telephony.LineDescriptionSettings;
        }
    }
    namespace xander {
        /** Available contact fields */
        enum ContactFieldEnum {
            "address.city",
            "address.country",
            "address.line1",
            "address.line2",
            "address.line3",
            "address.otherDetails",
            "address.province",
            "address.zip",
            "birthCity",
            "birthCountry",
            "birthDay",
            "birthZip",
            "cellPhone",
            "companyNationalIdentificationNumber",
            "email",
            "fax",
            "firstName",
            "gender",
            "language",
            "lastName",
            "legalForm",
            "nationalIdentificationNumber",
            "nationality",
            "organisationName",
            "organisationType",
            "phone",
            "spareEmail",
            "vat"
        }
    }
    namespace xdsl {
        /** Xdsl Settings */
        interface Setting {
            /** Send the modem as soon as possible, do not wait the xdsl line to be active */
            resellerFastModemShipping: boolean;
            /** Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager */
            resellerModemBasicConfig: boolean;
        }
    }
}
