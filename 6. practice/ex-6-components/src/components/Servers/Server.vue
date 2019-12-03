<template>
    <div>
        <span>Server #{{ serverId }} </span>
    </div>
</template>

<script>
export default {
    props: {
        serverId: { type: Number }
    }
}
</script>