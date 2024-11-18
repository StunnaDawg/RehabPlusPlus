<script>

    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
    import * as Card from "$lib/components/ui/card/index";
    import * as Table from "$lib/components/ui/table/index";
   
    
    // Sample data
    const exerciseStats = {
      completed: 24,
      total: 30,
      streak: 5
    };

    const patients = [
    {
      id: 1,
      fullName: "Liam Johnson",
      email: "liam.johnson@example.com",
      phone: "(902)123-4546",
      date: "2024-10-01",
      diagnosis: "ACL Tear",
      progress: "50%",
      status: "active | nonactive"
    },
    {
      id: 2,
      fullName: "Olivia Smith",
      email: "olivia.smith@example.com",
      phone: "(902)123-4546",
      date: "2024-10-05",
      diagnosis: "Shoulder Dislocation",
      progress: "80%",
    },
    {
      id: 3,
      fullName: "Ethan Brown",
      email: "ethan.brown@example.com",
      phone: "(902)123-4546",
      date: "2024-10-10",
      diagnosis: "Ankle Sprain",
      progress: "30%",
    },
    {
      id: 4,
      fullName: "Emma Davis",
      email: "emma.davis@example.com",
      phone: "(902)123-4546",
      date: "2024-10-15",
      diagnosis: "Knee Surgery",
      progress: "95%",
    },
  ];
  
</script>

<Card.Root>
    <Card.Header class="px-6">
      <Card.Title>Patients</Card.Title>
      <Card.Description>Patients from ProActive Clinic</Card.Description>
    </Card.Header>
    <Card.Content>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head class="md:table-cell">Full Name</Table.Head>
            <Table.Head class="md:table-cell text-left">Date</Table.Head>
            <Table.Head class="md:table-cell text-left">Diagnosis</Table.Head>
            <Table.Head class="md:table-cell text-left">Progress</Table.Head>
            <Table.Head class="md:table-cell text-left">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each patients as patient (patient.id)}
            <Table.Row>
              <Table.Cell>
                <div class="font-medium">{patient.fullName}</div>
                <div class="text-muted-foreground text-sm md:inline">
                  {patient.email}
                </div>
                <div class="text-muted-foreground text-sm md:inline">
                  {patient.phone}
                </div>
              </Table.Cell>
              <Table.Cell class="md:table-cell">{patient.date}</Table.Cell>
              <Table.Cell class="md:table-cell">{patient.diagnosis}</Table.Cell>
              <Table.Cell class="md:table-cell">
                {patient.progress}
              </Table.Cell>
              <Table.Cell class="md:table-cell">
                <Button variant="ghost">View</Button>
                <Button variant="ghost">Edit</Button>
              </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </Card.Content>
  </Card.Root>